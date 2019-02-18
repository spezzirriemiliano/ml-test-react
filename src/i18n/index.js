import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from './es.json';
import en from './en.json';

const resources = {
  "es": es,
  "en": en
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    keySeparator: true,
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;