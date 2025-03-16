import { defineMiddleware } from 'astro:middleware';
import { getLangFromUrl } from './i18n/utils';

export const onRequest = defineMiddleware(async (context, next) => {
  // Get the language from the URL
  const lang = getLangFromUrl(context.url);
  
  // Add the language to the locals object so it can be accessed in all components
  context.locals.lang = lang;
  
  // Continue to the next middleware or the final handler
  return next();
}); 