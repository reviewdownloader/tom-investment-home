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
                                <img src="img/logos/logo-footer-2.png" id="footer_logo" alt="logo" />
                            </a>
                            <p className="mt-20">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.
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
                                            <a href="/">{t("nav.signup")}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <ul className="footer-nav">
                                        <li>
                                            <a href="#">{t("nav.login")}</a>
                                        </li>
                                        <li>
                                            <a href="#">{t("nav.faqs")}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-1-bar">
                        <p>{AppName} © 2011 - 2020. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
