import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './translations/en.json'; // English translations
import translationHE from './translations/he.json'; // Hebrew translations

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    he: { translation: translationHE },
  },
  lng: 'he', // Set the default language
  fallbackLng: 'he', // Fallback to English if translation is missing
  interpolation: {
    escapeValue: false, // Allow string interpolation
  },
});

export default i18n;
