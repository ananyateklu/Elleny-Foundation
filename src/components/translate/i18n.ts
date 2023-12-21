// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Cookies from 'js-cookie';

import enTranslation from './en/translation.json';
import amTranslation from './am/translation.json';

// Retrieve the current language set in the cookie, default to Amharic
const currentLanguage = Cookies.get('i18next') || 'am';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      am: { translation: amTranslation },
    },
    lng: currentLanguage, // Use the language from the cookie or default
    fallbackLng: 'am',
    // ... other config options
  });

export default i18n;
