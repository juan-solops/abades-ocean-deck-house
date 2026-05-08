export type Locale = 'en' | 'es' | 'de' | 'fr' | 'nl' | 'ru' | 'pl' | 'uk';

export const locales: Locale[] = ['en', 'es', 'de', 'fr', 'nl', 'ru', 'pl', 'uk'];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  nl: 'Nederlands',
  ru: 'Русский',
  pl: 'Polski',
  uk: 'Українська',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  de: '🇩🇪',
  fr: '🇫🇷',
  nl: '🇳🇱',
  ru: '🇷🇺',
  pl: '🇵🇱',
  uk: '🇺🇦',
};
