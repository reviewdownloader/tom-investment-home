import { Layout } from "../components/Layout";
import useTranslation from "../intl/useTranslation";

export default function faqs() {
    const { t } = useTranslation();
    return (
        <Layout title={t("faq")}>
            <div className="breadcrumb-section jarallax pixels-bg">
                <div className="container text-center">
                    <h1>{t("faq")}</h1>
                    <ul>
                        <li>
                            <a href="/">{t("nav.home")}</a>
                        </li>
                        <li>
                            <a href="/faqs">{t("nav.faqs")}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="section-block">
                <div className="container">
                    <div className="section-heading text-left">
                        <h4 className="semi-bold">{t("nav.faqs")}</h4>
                        <div className="section-heading-line line-thin"></div>
                    </div>
                    <div id="accordion" role="tablist" className="mt-15">
                        <div className="card card-primary">
                            <div className="card-header card-header-primary" role="tab" id="headingOne">
                                <h5 className="mb-0">
                                    <a
                                        className="collapsed"
                                        data-toggle="collapse"
                                        href="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        {t("f.1.q")}
                                    </a>
                                </h5>
                            </div>
                            <div
                                id="collapseOne"
                                className="collapse"
                                role="tabpanel"
                                aria-labelledby="headingOne"
                                data-parent="#accordion"
                            >
                                <div className="card-body card-body-primary">
                                    <p>{t("f.1.a")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card card-primary">
                            <div className="card-header card-header-primary" role="tab" id="headingTwo">
                                <h5 className="mb-0">
                                    <a
                                        className="collapsed"
                                        data-toggle="collapse"
                                        href="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        {t("f.2.q")}
                                    </a>
                                </h5>
                            </div>
                            <div
                                id="collapseTwo"
                                className="collapse"
                                role="tabpanel"
                                aria-labelledby="headingTwo"
                                data-parent="#accordion"
                            >
                                <div className="card-body card-body-primary">
                                    <p>{t("f.2.a")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card card-primary">
                            <div className="card-header card-header-primary" role="tab" id="headingThree">
                                <h5 className="mb-0">
                                    <a
                                        className="collapsed"
                                        data-toggle="collapse"
                                        href="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        {t("f.3.q")}
                                    </a>
                                </h5>
                            </div>
                            <div
                                id="collapseThree"
                                className="collapse"
                                role="tabpanel"
                                aria-labelledby="headingThree"
                                data-parent="#accordion"
                            >
                                <div className="card-body card-body-primary">
                                    <p>{t("f.3.a")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card card-primary">
                            <div className="card-header card-header-primary" role="tab" id="headingFour">
                                <h5 className="mb-0">
                                    <a
                                        className="collapsed"
                                        data-toggle="collapse"
                                        href="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        {t("f.4.q")}
                                    </a>
                                </h5>
                            </div>
                            <div
                                id="collapseFour"
                                className="collapse"
                                role="tabpanel"
                                aria-labelledby="headingFour"
                                data-parent="#accordion"
                            >
                                <div className="card-body card-body-primary">
                                    <p>{t("f.4.a")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="card card-primary">
                            <div className="card-header card-header-primary" role="tab" id="headingFive">
                                <h5 className="mb-0">
                                    <a
                                        className="collapsed"
                                        data-toggle="collapse"
                                        href="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                        {t("f.5.q")}
                                    </a>
                                </h5>
                            </div>
                            <div
                                id="collapseFive"
                                className="collapse"
                                role="tabpanel"
                                aria-labelledby="headingFive"
                                data-parent="#accordion"
                            >
                                <div className="card-body card-body-primary">
                                    <p>{t("f.5.a")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="card card-primary">
                            <div className="card-header card-header-primary" role="tab" id="headingSix">
                                <h5 className="mb-0">
                                    <a
                                        className="collapsed"
                                        data-toggle="collapse"
                                        href="#collapseSix"
                                        aria-expanded="false"
                                        aria-controls="collapseSix"
                                    >
                                        {t("f.6.q")}
                                    </a>
                                </h5>
                            </div>
                            <div
                                id="collapseSix"
                                className="collapse"
                                role="tabpanel"
                                aria-labelledby="headingSix"
                                data-parent="#accordion"
                            >
                                <div className="card-body card-body-primary">
                                    <p>{t("f.6.a")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="card card-primary">
                            <div className="card-header card-header-primary" role="tab" id="headingSeven">
                                <h5 className="mb-0">
                                    <a
                                        className="collapsed"
                                        data-toggle="collapse"
                                        href="#collapseSeven"
                                        aria-expanded="false"
                                        aria-controls="collapseSeven"
                                    >
                                        {t("f.7.q")}
                                    </a>
                                </h5>
                            </div>
                            <div
                                id="collapseSeven"
                                className="collapse"
                                role="tabpanel"
                                aria-labelledby="headingSeven"
                                data-parent="#accordion"
                            >
                                <div className="card-body card-body-primary">
                                    <p>{t("f.7.a")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="action-box action-box-md grey-bg center-holder-xs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-sm-10 col-12">
                            <h3 className="bold">{t("goal")}</h3>
                        </div>
                        <div className="col-md-2 col-sm-2 col-12 text-right center-holder-xs mt-10">
                            <a href="/about" className="button-md button-primary">
                                {t("learn-more")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
