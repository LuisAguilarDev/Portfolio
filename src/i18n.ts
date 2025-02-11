import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as en from './locales/en.json'
import * as es from './locales/es.json'
i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en,
    es
  },
});

export default i18n;