import Link from "next/link";
import useTranslation from "../intl/useTranslation";

export const Header = () => {
    const { t } = useTranslation();
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
                                    <a href="/">{t("nav.login")}</a>
                                    <a href="/create">{t("nav.signup")}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
