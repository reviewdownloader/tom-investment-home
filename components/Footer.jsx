import { AppName } from "../app";
import useTranslation from "../intl/useTranslation";

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <div className="footer-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-12">
                            <a href="#">
                                <img src="img/logos/logo-footer-2.png" style={{width:"74px"}} id="footer_logo" alt="logo" />
                            </a>
                            <p className="mt-20">
                                {AppName} {t("app.about-s")}
                            </p>
                        </div>
                        <div className="col-md-6 col-sm-6 col-12">
                            <h2>{t("footer.header")}</h2>
                            <div className="row mt-25">
                                <div className="col-md-6 col-sm-6">
                                    <ul className="footer-nav">
                                        <li>
                                            <a href="/">{t("nav.home")}</a>
                                        </li>
                                        <li>
                                            <a href="/contact">{t("nav.contact")}</a>
                                        </li>

                                        <li>
                                            <a href="https://app.timostephaninvestment.com/create-account">{t("nav.signup")}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <ul className="footer-nav">
                                        <li>
                                            <a href="https://app.timostephaninvestment.com">{t("nav.login")}</a>
                                        </li>
                                        <li>
                                            <a href="/faqs">{t("nav.faqs")}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-1-bar">
                        <p>{AppName} © 2015 - 2021. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
