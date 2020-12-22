import { createContext, useState } from "react";

export const defaultLang = "en";
export const locales = ["en"];
export const LanguageContext = createContext([]);

export const LanguageProvider = ({ children }) => {
    const [locale, setLocale] = useState("en");
    return <LanguageContext.Provider value={[locale, setLocale]}>{children}</LanguageContext.Provider>;
};
