import { useEffect, useState } from "react";
import useTranslation from "../intl/useTranslation";

const langs = [
    { title: "English", value: "en" },
    { title: "Spanish", value: "es" },
    { title: "French", value: "fr" },
    { title: "German", value: "de" },
    { title: "Polish", value: "pl" }
];
export const Header = () => {
    const { t, locale, setLocale } = useTranslation();
    const idx = langs.findIndex((c) => c.value === locale);
    const [lang, setLang] = useState(langs[idx]);

    useEffect(() => {
        const idx = langs.findIndex((c) => c.value === locale);
        setLang(langs[idx]);
    }, [locale]);
    return (
        <header>
            <nav id="navigation4" className="container navigation">
                <div className="nav-header">
                    <a className="nav-brand" href="/">
                        <img src="img/logos/logo-2.png" className="main-logo" alt="logo" id="main_logo" />
                    </a>
                    <div className="nav-toggle"></div>
                </div>
                <div className="nav-menus-wrapper">
                    <ul className="nav-menu align-to-right">
                        <li>
                            <a href="/">{t("nav.home")}</a>
                        </li>
                        <li>
                            <a href="/contact">{t("nav.contact")}</a>
                        </li>
                        <li>
                            <a href="/about">{t("nav.about")}</a>
                        </li>
                        <li>
                            <a href="/faqs">{t("nav.faqs")}</a>
                        </li>
                        <li>
                            <a href="#">{t("nav.account")}</a>
                            <ul className="nav-dropdown">
                                <li>
                                    <a href="https://app.timostephaninvestment.com">{t("nav.login")}</a>
                                    <a href="https://app.timostephaninvestment.com/create-account">{t("nav.signup")}</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">{lang.title}</a>
                            <ul className="nav-dropdown">
                                {langs.map((item, idx) => (
                                    <li key={idx}>
                                        <a
                                            onClick={() => {
                                                localStorage.setItem("lng", item.value);
                                                setLocale(item.value);
                                                setLang(item);
                                            }}
                                            className={item.value === lang.value ? "text-primary" : ""}
                                            href="javascript:void(0)"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
