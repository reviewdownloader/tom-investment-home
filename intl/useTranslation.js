import { useContext } from "react";
import { LanguageContext, defaultLang } from "./LanguageProvider";
import { LangStrings } from "./Langs";

export default function useTranslation() {
    const [locale, setLocale] = useContext(LanguageContext);
    function t(key) {
        if (!LangStrings[locale][key]) {
            console.warn(`No string '${key}' for locale '${locale}'`);
        }

        return LangStrings[locale][key] || LangStrings[defaultLang][key] || key;
    }

    return { t, locale, setLocale };
}
