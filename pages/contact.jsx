import { Layout } from "../components/Layout";
import Partners from "../components/Partner";
import useTranslation from "../intl/useTranslation";

export default function Contact() {
    const { t } = useTranslation();

    return (
        <Layout title={t("nav.contact")}>
            <div className="breadcrumb-section jarallax pixels-bg">
                <div className="container text-center">
                    <h1>{t("nav.contact")}</h1>
                    <ul>
                        <li>
                            <a href="/">{t("nav.home")}</a>
                        </li>
                        <li>
                            <a href="/contact">{t("nav.contact")}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="section-block grey-bg background-shape-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="contact-box-place-office">
                                <i className="icon-office-building"></i>
                                <h4>London Office</h4>
                                <h6>4th floor 25 Copthall Avenue, London, EC2R 7BP</h6>
                                <ul>
                                    <li>
                                        <i className="fas fa-envelope-open"></i>info@timostephaninvestment.com
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i>+44 7451 275097‬
                                    </li>
                                </ul>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>

            <div className="container-fluid pl-0 pr-0">
                <div className="row no-gutters">
                    <div className="col-md-6 col-sm-12 col-12">
                        <div className="padding-10-perc">
                            <div className="section-heading text-left">
                                <small className="grey-color font-size-20 font-weight-normal">{t("c.f.h")}</small>
                                <h3 className="semi-bold font-size-32">{t("c.f.h.p")}</h3>
                                <div className="section-heading-line line-thin"></div>
                            </div>
                            <form method="post" className="primary-form-3 mt-45">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <input required type="text" name="name" placeholder={t("h.f.n")} />
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <input required type="text" name="phone" placeholder={t("h.f.p")} />
                                    </div>
                                    <div className="col-12">
                                        <select name="subject">
                                            <option>{t("h.f.s")}</option>
                                            <option>Development Manager</option>
                                            <option>Project Lead</option>
                                            <option>Solutions Analyst</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <textarea required placeholder={t("h.f.m")} name="message"></textarea>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="button-md button-primary text-uppercase ml-0">
                                        {t("form.send")}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                        <div className="full-background min-350">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7969233006224!2d-0.08991818417626307!3d51.5169415796367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cab62f57517%3A0x9d202577728746e1!2s25%20Copthall%20Ave%2C%20London%20EC2R%207BP%2C%20UK!5e0!3m2!1sen!2sng!4v1616110707396!5m2!1sen!2sng"
                                className="full-width full-height"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Partners />
        </Layout>
    );
}
