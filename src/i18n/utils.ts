import enMessages from './messages/en.json';
import hiMessages from './messages/hi.json';
import taMessages from './messages/ta.json';

export const languages = {
  en: 'English',
  hi: 'हिन्दी',
  ta: 'தமிழ்'
};

export const defaultLang = 'en';

type Messages = {
  [key: string]: string | Messages;
};

type MessageDictionary = {
  [locale: string]: Messages;
};

const messages: MessageDictionary = {
  en: enMessages,
  hi: hiMessages,
  ta: taMessages,
};

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang;
  return defaultLang;
}

export function useTranslations(lang: string) {
  return function t(key: string): string {
    // Split the key by dots to access nested properties
    const keys = key.split('.');
    let result: any = messages[lang];
    
    // Navigate through the nested properties
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        result = undefined;
        break;
      }
    }
    
    // If the result is undefined, try to fallback to English
    if (result === undefined && lang !== defaultLang) {
      result = messages[defaultLang];
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          result = undefined;
          break;
        }
      }
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