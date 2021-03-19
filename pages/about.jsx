import { Layout } from "../components/Layout";
import Partners from "../components/Partner";
import useTranslation from "../intl/useTranslation";

export default function About() {
    const { t } = useTranslation();
    return (
        <Layout title={t("nav.about")}>
            <div className="breadcrumb-section jarallax pixels-bg">
                <div className="container text-center">
                    <h1>{t("nav.about")}</h1>
                    <ul>
                        <li>
                            <a href="/">{t("nav.home")}</a>
                        </li>
                        <li>
                            <a href="/about">{t("nav.about")}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="section-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-12">
                            <img src="img/content/about/about-3.jpg" className="rounded-border shadow-primary" alt="about" />
                        </div>
                        <div className="col-md-6 col-sm-6 col-12">
                            <div className="pl-30-md">
                                <div className="section-heading text-left mt-5">
                                    <h3 className="semi-bold font-size-32">
                                        {t("about.h")}
                                        <span className="primary-color">{t("about.h.2")}</span>
                                    </h3>
                                    <div className="section-heading-line line-thin"></div>
                                    <div className="text-content">
                                        <p>{t("pp.about-s")}</p>
                                    </div>
                                </div>
                                <div className="primary-list mt-25">
                                    <ul>
                                        <li>
                                            <i className="fas fa-check-circle"></i> {t("about.h2.1")}
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle"></i>
                                            {t("about.h2.2")}
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle"></i>
                                            {t("about.h2.3")}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row mt-40">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="features-box">
                                <div className="features-box-icon">
                                    <i className="icon-locked-combination-padlock-stroke"></i>
                                </div>
                                <div className="features-box-content">
                                    <h3>Customer Satisfaction Value</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="features-box">
                                <div className="features-box-icon">
                                    <i className="icon-marketing"></i>
                                </div>
                                <div className="features-box-content">
                                    <h3>Inventory Management</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="features-box">
                                <div className="features-box-icon">
                                    <i className="icon-chess"></i>
                                </div>
                                <div className="features-box-content">
                                    <h3>Business Consultancy</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <div
                className="section-block-parallax jarallax primary-overlay-80"
                style={{ backgroundImage: "url('img/content/business/bg4.jpg')" }}
            >
                <div className="container">
                    <div className="large-heading text-center">
                        <small className="semi-bold white-color">{t("about.h.4")}</small>
                        <h4 className="semi-bold white-color">
                            {t("about.h.4.a")} <br />
                            {t("about.h.4.b")}
                        </h4>
                    </div>
                </div>
            </div>

            <Partners />
        </Layout>
    );
}
