import { createContext, useContext, useState } from "react";
import en from "../data/i18n/en";
import es from "../data/i18n/es";

const LanguageContext = createContext();

const languages = { en, es };

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  };

  const value = {
    lang,
    setLang,
    toggleLanguage,
    t: languages[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
