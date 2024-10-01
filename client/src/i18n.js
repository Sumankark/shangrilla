// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enTranslation from "./translation/en.json";
import npTranslation from "./translation/np.json";

// Resources object to define supported languages
const resources = {
  en: {
    translation: enTranslation,
  },
  np: {
    translation: npTranslation,
  },
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    detection: {
      order: ["localStorage", "navigator"], // Save language preference in local storage
      caches: ["localStorage"],
    },
  });

export default i18n;
