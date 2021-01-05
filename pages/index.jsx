import Link from "next/link";
import { Layout } from "../components/Layout";
import Partners from "../components/Partner";
import { Slider } from "../components/Slider";
import useTranslation from "../intl/useTranslation";

export default function Home() {
    const { t } = useTranslation();
    return (
        <Layout title={t("home")}>
            <Slider />
            <div className="section-block-bg" style={{ backgroundImage: "url('img/content/business/bg5.jpg')" }}>
                <div className="container">
                    <div className="section-heading text-center">
                        <h3 className="semi-bold font-size-35">{t("home.h3")}</h3>
                        <div className="section-heading-line line-thin"></div>
                        <p>{t("home.h3.p")}</p>
                    </div>
                    <div className="row mt-30">
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="service-block">
                                <img src="img/content/services/s10.jpg" alt="img" />
                                <div className="service-block-content">
                                    <h4>{t("home.h4.1")}</h4>
                                    <p>{t("home.h4.1-p")}</p>
                                    <a href="login.html" className="service-block-content-button">
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="service-block">
                                <img src="img/content/services/s11.jpg" alt="img" />
                                <div className="service-block-content">
                                    <h4>{t("home.h4.2")}</h4>
                                    <p>{t("h.h4.2.p")}</p>
                                    <a href="login.html" className="service-block-content-button">
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="service-block">
                                <img src="img/content/services/s12.jpg" alt="img" />
                                <div className="service-block-content">
                                    <h4>{t("h.h4.3")}</h4>
                                    <p>{t("h.h4.3.p")}</p>
                                    <a href="login.html" className="service-block-content-button">
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-block grey-bg background-shape-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-5 col-12">
                            <div className="section-heading">
                                <small className="uppercase">{t("h.2")}</small>
                                <h4 className="semi-bold">{t("h.2.d")}</h4>
                            </div>
                            <div className="text-content mt-15">
                                <p>{t("h.2.p")}</p>
                            </div>
                            <ul className="primary-list mt-20">
                                <li>
                                    <i className="fas fa-check-circle"></i>
                                    {t("h.3")}
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i>
                                    {t("h.3.d")}
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i>
                                    {t("h.3.p")}
                                </li>
                            </ul>
                            <Link href="about">
                                <a className="button-md button-primary mt-30">{t("h.3.more")}</a>
                            </Link>
                        </div>
                        <div className="col-md-6 col-sm-6 col-12 offset-md-1">
                            <img
                                src="img/content/home-images/home13.jpg"
                                className="position-relative extra-rounded-border shadow-primary z-index-9 mt-30-xs"
                                alt="img"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-block">
                <div className="container">
                    <div className="section-heading text-center">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 col-12">
                                <div className="countup-box">
                                    <h4 className="countup">10,524</h4>
                                    <h5>{t("h.count.1")}</h5>
                                    <i className="icon-collaboration"></i>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12">
                                <div className="countup-box">
                                    <h4 className="countup">6,785</h4>
                                    <h5>{t("h.count.2")}</h5>
                                    <i className="icon-locked-combination-padlock-stroke"></i>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12">
                                <div className="countup-box">
                                    <h4 className="countup">3,102</h4>
                                    <h5>{t("h.count.3")}</h5>
                                    <i className="icon-discussion2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="section-block-parallax jarallax black-overlay-70"
                data-jarallax
                data-speed="0.6"
                style={{ backgroundImage: "url('img/content/business/bg3.jpg')" }}
            >
                <div className="container">
                    <div className="large-heading text-center">
                        <small className="semi-bold white-color">{t("h.about.h")}</small>
                        <h4 className="semi-bold white-color">
                            {t("h.about.p1")} <br />
                            {t("h.about.p2")}
                        </h4>
                        <div className="section-heading-line"></div>
                    </div>
                    <div className="mt-25 text-center">
                        <Link href="/about">
                            <a class="button-md button-white-bordered mt-10">{t("h.about.l-more")}</a>
                        </Link>
                    </div>
                </div>
            </div>

            <Partners />

            <div className="section-block">
                <div className="container">
                    <div className="section-heading text-center">
                        <h3 className="semi-bold">{t("h.t.h")}</h3>
                        <div className="section-heading-line"></div>
                        <p>
                            {t("h.t.p1")}
                            <br />
                            {t("h.t.p2")}
                        </p>
                    </div>
                    <div className="row">
                        <div className="owl-carousel owl-theme testmonials-carousel">
                            <div className="testmonial-box">
                                <div className="testmonial-box-icon">
                                    <img src="img/content/testmonials/t-1.jpg" alt="img" />
                                </div>
                                <div className="testmonial-box-content">
                                    <h3>Andrew Bright</h3>
                                    <strong>{t("h.t.1.n")}</strong>
                                    <p>{t("h.t.1.d")}</p>
                                    <div className="stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="testmonial-box">
                                <div className="testmonial-box-icon">
                                    <img src="img/content/testmonials/t-3.jpg" alt="img" />
                                </div>
                                <div className="testmonial-box-content">
                                    <h3>Elizabeth Twain</h3>
                                    <strong>{t("h.t.2.n")}</strong>
                                    <p>{t("h.t.2.d")}</p>
                                    <div className="stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="testmonial-box">
                                <div className="testmonial-box-icon">
                                    <img src="img/content/testmonials/t-2.jpg" alt="img" />
                                </div>
                                <div className="testmonial-box-content">
                                    <h3>james Well</h3>
                                    <strong>{t("h.t.3.n")}</strong>
                                    <p>{t("h.t.3.d")}</p>
                                    <div className="stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="testmonial-box">
                                <div className="testmonial-box-icon">
                                    <img src="img/content/testmonials/t-6.jpg" alt="img" />
                                </div>
                                <div className="testmonial-box-content">
                                    <h3>Jonathan Horseman</h3>
                                    <strong>{t("h.t.4.n")}</strong>
                                    <p>{t("h.t.4.d")}</p>
                                    <div className="stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="section-block grey-bg jarallax"
                data-jarallax
                data-speed="0.9"
                style={{ backgroundImage: "url('img/content/business/bg-map.png')" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="section-heading">
                                <h3 className="semi-bold">{t("h.c.h")}</h3>
                                <p>{t("h.c.d")}</p>
                            </div>
                            <div>
                                <div className="contact-icon-box">
                                    <i className="icon-phone-book"></i>
                                    <h4>{t("h.c.1")}</h4>
                                    <h5>+1(213) 432-2266</h5>
                                </div>
                                <div className="contact-icon-box">
                                    <i className="icon-opened-email-outlined-interface-symbol"></i>
                                    <h4>{t("h.c.2")}</h4>
                                    <h5>info@tominvestment.com</h5>
                                </div>
                                <div className="contact-icon-box">
                                    <i className="icon-location"></i>
                                    <h4>{t("h.c.3")}</h4>
                                    <h5>5750 Wilshire Boulevard, Mid-Wilshire, Los Angeles, CA 90036</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="pl-45-md">
                                <div className="callback-block">
                                    <h4 className="bold text-center">{t("h.f.h")}</h4>
                                    <div className="section-heading-line line-thin"></div>
                                    <div className="text-content-big text-center mt-20">
                                        <p>{t("h.f.d")}</p>
                                    </div>
                                    <form className="primary-form mt-30">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6 col-12">
                                                <input type="text" name="name" required placeholder={t("h.f.n")} />
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-12">
                                                <input type="text" name="phone" placeholder={t("h.f.p")} />
                                            </div>
                                            <div className="col-12">
                                                <select name="subject">
                                                    <option>{t("h.f.s")}</option>
                                                    <option>Enquiries</option>
                                                    <option>Digital Currency Investment</option>
                                                    <option>Solutions Analyst</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <textarea placeholder={t("h.f.m")} name="message"></textarea>
                                            </div>
                                        </div>
                                        <div className="text-center mt-15">
                                            <button type="submit" className="button-md button-primary text-uppercase ml-0">
                                                {t("h.f.b")}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="action-box action-box-md grey-bg center-holder-xs">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 col-sm-10 col-12">
                            <h3 class="bold">{t("h.m.h")}</h3>
                            <p>{t("h.m.h.p")}</p>
                        </div>
                        <div class="col-md-2 col-sm-2 col-12 text-right center-holder-xs mt-10">
                            <a href="#" class="button-md button-primary">
                                {t("signup.now")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
