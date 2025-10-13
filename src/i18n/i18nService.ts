import type { InteractiveTranslationKey } from './locales/en';

let interactiveTexts: Record<string, string> = {};

export const i18nService = {

  init: (texts: Record<string, string>): void => {
    interactiveTexts = texts;
  },

  t: (key: InteractiveTranslationKey, replacements?: Record<string, string | number>): string => {
    let translation = interactiveTexts[key];

    if (translation === undefined) {
      console.error(`[i18nService.ts error] ${key} not found`);
      return key;
    }

    if (replacements) {
      for (const [placeholder, value] of Object.entries(replacements)) {
        const placeholderWithBraces = `{${placeholder}}`;
        if (!translation.includes(placeholderWithBraces)) {
          console.error(`[i18nService.ts error] Key "${key}" has no placeholder for "${placeholderWithBraces}", but a value was provided.`);
        }
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        translation = translation.replace(regex, String(value));
      }
    }
    const remainingPlaceholders = translation.match(/\{[^\}]+\}/g);
    if (remainingPlaceholders) {
      console.error(`[i18nService.ts error] Key "${key}" has un-replaced placeholders: ${remainingPlaceholders.join(', ')}. You may have forgotten to provide them in the 'replacements' object.`);
    }

    return translation;
  }
};