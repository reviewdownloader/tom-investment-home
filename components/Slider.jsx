import useTranslation from "../intl/useTranslation";

export const Slider = () => {
    const { t } = useTranslation();
    return (
        <div className="rev_slider_wrapper bg-arrows">
            <div id="rev_slider" className="rev_slider fullscreenbanner">
                <ul>
                    <li
                        data-delay="3000"
                        data-transition=""
                        data-slotAmount="7"
                        data-masterSpeed="500"
                        data-fsMasterSpeed="500"
                    >
                        <img
                            src="img/content/slider/slider1.jpg"
                            alt=""
                            data-bgPosition="center center"
                            data-bgFit="cover"
                            data-bgRepeat="no-repeat"
                            className="rev-slidebg"
                        />
                        <div
                            className="slide-title tp-caption tp-resizeme white-color text-center"
                            data-x="['center','center','center','center']"
                            data-hOffset="['0','0','0','0']"
                            data-y="['middle','middle','middle','middle']"
                            data-vOffset="['-90','-90', '-150', '-350']"
                            data-fontSize="['70','70', '70', '125']"
                            data-fontWeight="600"
                            data-lineHeight="['85','85', '80', '135']"
                            data-width="['800','800','650']"
                            data-height="none"
                            data-whitespace="normal"
                            data-transform_idle="o:3;"
                            data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power2.easeInOut;"
                            data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                            data-mask_in="x:50px;y:0px;s:inherit;e:inherit;"
                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                            data-start="100"
                            data-splitIn="chars"
                            data-splitOut="none"
                            data-responsive_offset="on"
                            data-elementDelay="0.03"
                        >
                            {t("s.1")}
                        </div>
                        <div
                            className="slide-subtitle tp-caption tp-resizeme white-color text-center"
                            data-x="['center','center','center','center']"
                            data-hoffset="['0','0','0','0']"
                            data-y="['middle','middle','middle','middle']"
                            data-voffset="['45','45', '15', '15']"
                            data-fontsize="['18', '18', '18', '18']"
                            data-fontweight="300"
                            data-lineheight="['30']"
                            data-width="['1200','1000','550']"
                            data-whitespace="nowrap"
                            data-transform_idle="o:1;"
                            data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power1.easeInOut;"
                            data-transform_out="opacity:0;s:1000;s:1000;"
                            data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                            data-start="1000"
                            data-splitin="none"
                            data-splitout="none"
                        >
                            {t("s.1.p.1")}
                            <br />
                            {t("s.1.p.2")}
                        </div>
                        <div
                            className="tp-caption rev-btn tp-resizeme button-white-bordered"
                            id="slide-1081-layer-12"
                            data-x="['center','center','center','center']"
                            data-hoffset="['0','0','0','0']"
                            data-y="['middle','middle','middle','middle']"
                            data-voffset="['125','125','125','30']"
                            data-fontsize="['15','15','15','15']"
                            data-fontweight="600"
                            data-lineheight="['50','50','50','50']"
                            data-width="['200','200','200','200']"
                            data-height="none"
                            data-borderWidth="2"
                            data-whitespace="nowrap"
                            data-start="1000"
                            data-type="button"
                            data-actions='[{"event":"click","action":"scrollbelow","offset":"-70px","delay":"","speed":"1000","ease":"Power1.easeInOut"}]'
                            data-responsive_offset="on"
                            data-splitin="none"
                            data-splitout="none"
                            data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"y:50px;opacity:0;fb:10px;fbr:100;","to":"o:1;fb:0;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;fbr:100;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;fbr:110%;","style":"c:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;"}]'
                            data-textAlign="['center','center','center','center']"
                            data-paddingtop="[0,0,0,0]"
                            data-paddingright="[0,0,0,0]"
                            data-paddingbottom="[0,0,0,0]"
                            data-paddingleft="[0,0,0,0]"
                        >
                            {t("s.1.action")}
                        </div>
                    </li>
                    <li
                        data-delay="3000"
                        data-transition=""
                        data-slotamount="7"
                        data-masterspeed="1000"
                        data-fsmasterspeed="1000"
                    >
                        <img
                            src="img/content/slider/slide2.jpg"
                            alt=""
                            data-bgposition="center center"
                            data-bgfit="cover"
                            data-bgrepeat="no-repeat"
                            className="rev-slidebg"
                        />
                        <div
                            className="slide-title tp-caption tp-resizeme text-center"
                            data-x="['center','center','center','center']"
                            data-hoffset="['0','0','0','0']"
                            data-y="['middle','middle','middle','middle']"
                            data-voffset="['-90','-90', '-150', '-350']"
                            data-fontsize="['70','60', '60', '125']"
                            data-fontweight="600"
                            data-lineheight="['80','70', '70', '135']"
                            data-width="['800','700','650']"
                            data-height="none"
                            data-color="#fff"
                            data-whitespace="normal"
                            data-transform_idle="o:1;"
                            data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power2.easeInOut;"
                            data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                            data-mask_in="x:50px;y:0px;s:inherit;e:inherit;"
                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                            data-start="500"
                            data-splitin="chars"
                            data-splitout="none"
                            data-responsive_offset="on"
                            data-elementdelay="0.05"
                        >
                            {t("s.2")}
                        </div>
                        <div
                            className="slide-subtitle tp-caption tp-resizeme text-center"
                            data-x="['center','center','center','center']"
                            data-hoffset="['0','0','0','0']"
                            data-y="['middle','middle','middle','middle']"
                            data-voffset="['45','25', '15', '15']"
                            data-fontsize="['18', '18', '18', '18']"
                            data-fontweight="300"
                            data-lineheight="['30']"
                            data-width="['1200','1000','550']"
                            data-whitespace="nowrap"
                            data-color="#fff"
                            data-transform_idle="o:1;"
                            data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power1.easeInOut;"
                            data-transform_out="opacity:0;s:1000;s:1000;"
                            data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                            data-start="1000"
                            data-splitin="none"
                            data-splitout="none"
                        >
                            {t("s.2.p.1")}
                            <br />
                            {t("s.2.p.2")}
                        </div>
                        <div
                            className="tp-caption rev-btn tp-resizeme slider-btn button-primary"
                            id="slide-1081-layer-13"
                            data-x="['center','center','center','center']"
                            data-hoffset="['0','0','0','0']"
                            data-y="['middle','middle','middle','middle']"
                            data-voffset="['100','100','100','30']"
                            data-fontsize="['15','15','15','15']"
                            data-fontweight="600"
                            data-lineheight="['50','50','50','50']"
                            data-width="['200','200','200','200']"
                            data-height="none"
                            data-whitespace="nowrap"
                            data-start="1000"
                            data-type="button"
                            data-actions='[{"event":"click","action":"scrollbelow","offset":"-70px","delay":"","speed":"2500","ease":"Power1.easeInOut"}]'
                            data-responsive_offset="on"
                            data-splitin="none"
                            data-splitout="none"
                            data-frames='[{"delay":900,"speed":1000,"frame":"0","from":"y:50px;opacity:0;fb:10px;fbr:100;","to":"o:1;fb:0;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;fbr:100;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;fbr:110%;","style":"c:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;"}]'
                            data-textAlign="['center','center','center','center']"
                            data-paddingtop="[0,0,0,0]"
                            data-paddingright="[0,0,0,0]"
                            data-paddingbottom="[0,0,0,0]"
                            data-paddingleft="[0,0,0,0]"
                        >
                            {t("learn-more")}
                        </div>
                    </li>

                    <li
                        data-delay="3000"
                        data-transition=""
                        data-slotamount="7"
                        data-masterspeed="1000"
                        data-fsmasterspeed="1000"
                    >
                        <img
                            src="img/content/slider/slide12.jpg"
                            alt=""
                            data-bgposition="center center"
                            data-bgfit="cover"
                            data-bgrepeat="no-repeat"
                            className="rev-slidebg"
                        />
                        <div
                            className="slide-title tp-caption tp-resizeme text-center"
                            data-x="['center','center','center','center']"
                            data-hoffset="['0','0','0','0']"
                            data-y="['middle','middle','middle','middle']"
                            data-voffset="['-90','-90', '-150', '-350']"
                            data-fontsize="['70','60', '60', '125']"
                            data-fontweight="600"
                            data-lineheight="['80','70', '70', '135']"
                            data-width="['800','700','650']"
                            data-height="none"
                            data-color="#fff"
                            data-whitespace="normal"
                            data-transform_idle="o:1;"
                            data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power2.easeInOut;"
                            data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                            data-mask_in="x:50px;y:0px;s:inherit;e:inherit;"
                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                            data-start="500"
                            data-splitin="chars"
                            data-splitout="none"
                            data-responsive_offset="on"
                            data-elementdelay="0.05"
                        >
                            {t("s.3")}
                        </div>
                        <div
                            className="slide-subtitle tp-caption tp-resizeme text-center"
                            data-x="['center','center','center','center']"
                            data-hoffset="['0','0','0','0']"
                            data-y="['middle','middle','middle','middle']"
                            data-voffset="['45','25', '15', '15']"
                            data-fontsize="['18', '18', '18', '18']"
                            data-fontweight="300"
                            data-lineheight="['30']"
                            data-width="['1200','1000','550']"
                            data-whitespace="nowrap"
                            data-color="#fff"
                            data-transform_idle="o:1;"
                            data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power1.easeInOut;"
                            data-transform_out="opacity:0;s:1000;s:1000;"
                            data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                            data-start="1000"
                            data-splitin="none"
                            data-splitout="none"
                        >
                            {t("s.3.p.1")}
                            <br />
                            {t("s.3.p.2")}
                        </div>
                        <a
                            href="about"
                            className="tp-caption rev-btn tp-resizeme slider-btn button-primary"
                            id="slide-1081-layer-13"
                            data-x="['center','center','center','center']"
                            data-hoffset="['0','0','0','0']"
                            data-y="['middle','middle','middle','middle']"
                            data-voffset="['100','100','100','30']"
                            data-fontsize="['15','15','15','15']"
                            data-fontweight="600"
                            data-lineheight="['50','50','50','50']"
                            data-width="['200','200','200','200']"
                            data-height="none"
                            data-whitespace="nowrap"
                            data-start="1000"
                            data-type="button"
                            data-actions='[{"event":"click","action":"scrollbelow","offset":"-70px","delay":"","speed":"2500","ease":"Power1.easeInOut"}]'
                            data-responsive_offset="on"
                            data-splitin="none"
                            data-splitout="none"
                            data-frames='[{"delay":900,"speed":1000,"frame":"0","from":"y:50px;opacity:0;fb:10px;fbr:100;","to":"o:1;fb:0;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;fbr:100;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;fbr:110%;","style":"c:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;"}]'
                            data-textAlign="['center','center','center','center']"
                            data-paddingtop="[0,0,0,0]"
                            data-paddingright="[0,0,0,0]"
                            data-paddingbottom="[0,0,0,0]"
                            data-paddingleft="[0,0,0,0]"
                        >
                            {t("signup.now")}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
