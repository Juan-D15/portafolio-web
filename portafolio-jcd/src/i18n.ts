import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es.json';
import en from './locales/en.json';

const savedLanguage = localStorage.getItem('language') || 'es';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    lng: savedLanguage,
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    interpolation: {
      escapeValue: false,
    },
  });

// Persist language changes to localStorage
i18next.on('languageChanged', (lng: string) => {
  localStorage.setItem('language', lng);
  document.documentElement.lang = lng;
});

// Set initial lang attribute
document.documentElement.lang = savedLanguage;

export default i18next;
