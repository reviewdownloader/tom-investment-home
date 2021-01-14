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
                                <h4>Los Angeles Office</h4>
                                <h6>5750 Wilshire Boulevard, Mid-Wilshire, Los Angeles, CA 90036</h6>
                                <ul>
                                    <li>
                                        <i className="fas fa-envelope-open"></i>info@patrickinvestmentservices.com
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i>+1(213) 432-2266
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="contact-box-place-office">
                                <i className="icon-bank"></i>
                                <h4>Dallas Office</h4>
                                <h6>14755-14785 Preston Rd, Oaks at Williamsburg, Dallas, TX 75254</h6>
                                <ul>
                                    <li>
                                        <i className="fas fa-envelope-open"></i>info@patrickinvestmentservices.com
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i>+(323) 795-4915
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="contact-box-place-office">
                                <i className="icon-store"></i>
                                <h4>Phoenix Office</h4>
                                <h6>2801 E Camelback Road, Biltmore, Phoenix, AZ 85016</h6>
                                <ul>
                                    <li>
                                        <i className="fas fa-envelope-open"></i>info@patrickinvestmentservices.com
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i>+(312) 325-0492
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.3260067688448!2d-118.35696688471366!3d34.0611562806036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b92263d3b86b%3A0x218c375e63be7eb6!2s5750%20Wilshire%20Blvd%2C%20Los%20Angeles%2C%20CA%2090036%2C%20USA!5e0!3m2!1sen!2sng!4v1610641903089!5m2!1sen!2sng"
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
