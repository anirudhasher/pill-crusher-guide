// Import from utils.ts instead since it already has a working implementation
import { getLangFromUrl as getLang, useTranslations as useT, getRouteFromUrl as getRoute, getPathWithLang as getPath } from './utils';

// Re-export the functions
export const getLangFromUrl = getLang;
export const useTranslations = useT;
export const getRouteFromUrl = getRoute;
export const getPathWithLang = getPath;

// Re-export the constants
export { languages, defaultLang } from './utils'; 