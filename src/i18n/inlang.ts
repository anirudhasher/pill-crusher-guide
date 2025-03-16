import { createI18n } from '@inlang/sdk';
import en from './messages/en.json';
import hi from './messages/hi.json';

export const languages = {
  en: 'English',
  hi: 'हिन्दी',
};

export const defaultLang = 'en';

export const i18n = createI18n({
  messages: {
    en,
    hi,
  },
  sourceLanguageTag: 'en',
  referenceLanguageTag: 'en',
});

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang;
  return defaultLang;
}

export function useTranslations(lang: string) {
  return function t(key: string): string {
    // Split the key by dots to access nested properties
    const keys = key.split('.');
    let result: any = i18n.get({ language: lang, key: key });
    
    // If the result is undefined, try to fallback to English
    if (result === undefined && lang !== defaultLang) {
      result = i18n.get({ language: defaultLang, key: key });
    }
    
    // If still undefined, return the key itself as a fallback
    return result !== undefined ? result : key;
  };
}

export function getRouteFromUrl(url: URL): string {
  const [, lang, ...rest] = url.pathname.split('/');
  if (lang in languages) {
    return '/' + rest.join('/');
  }
  return url.pathname;
}

export function getPathWithLang(path: string, lang: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // If it's the default language, we don't need to include it in the URL
  if (lang === defaultLang) {
    return `/${cleanPath}`;
  }
  
  return `/${lang}/${cleanPath}`;
} 