import { createContext, useEffect, useState } from "react";

export let defaultLang = "en";
export const locales = ["en", "fr", "de", "pl", "es"];
export const LanguageContext = createContext([]);

export const LanguageProvider = ({ children }) => {
    // update
    useEffect(() => {
        // check local storage
        const lng = localStorage.getItem("lng");
        // default language from browser
        const lang = window.navigator.language.split("-")[0];
        defaultLang = lng || lang || "";
        setLocale(defaultLang);
    }, []);

    const [locale, setLocale] = useState(defaultLang);
    return <LanguageContext.Provider value={[locale, setLocale]}>{children}</LanguageContext.Provider>;
};
