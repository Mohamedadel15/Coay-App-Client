import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next"

import { BsSendCheck } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';

const FooterSocialIcone = [<BiLogoFacebook />, <FaGithub />, <GrLinkedinOption />, <AiOutlineInstagram />]

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [t] = useTranslation()
    return (
        <footer
            ref={ref}
            style={{
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
            }}>
            <main className="max-w-full overflow-hidden p-[10px] md:p-[70px] mt-[50px] bg-FooterBg relative w-full min-h-[400px] bg-cover after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgb(0,0,0,0.7)] after:dark:bg-[rgb(0,0,0,0.8)]">
                <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center items-center container relative z-20 p-5  pt-[100px]  gap-3 text-[#fff] dark:text-primary_Color">
                    <div >
                        <p className=" text-[15px] opacity-90 mb-[30px]">{t("footer.title1")}</p>
                        <h1 className="text-[40px] max-w-[700px] font-bold max-w-[500px]">{t("footer.title2")}</h1>
                    </div>
                    <div>
                        <form>
                            <div className="element-between pe-[20px]  border-b-2 mb-8">
                                <input type="email" placeholder={t("footer.subscribe.holder")} required className="p-2 py-3 border-0 outline-none bg-inherit " />
                                <button className="element-center gap-1 ">{t("footer.subscribe.button")} <BsSendCheck /></button>
                            </div>
                            <input type="checkbox" id="acceptPrivacy" className="cursor-pointer" required />
                            <label className="cursor-pointer ms-3" htmlFor="acceptPrivacy">{t("footer.subscribe.policy")}</label>
                        </form>
                    </div>
                </div>
            </main>
            <main className="bg-BgDark text-[#fff] dark:text-primary_Color">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="text-center border border-[1px] border-[#5e57574f] py-8">
                        <p className="text-[15px] font-light"> {t("footer.info.title1")}</p>
                        <a className="text-[15px] text-hover Transition300" href="https://maps.app.goo.gl/aBy9ziYJumypopxL7" target="_blank">{t("footer.info.street")}</a>
                    </div>
                    <div className="text-center border border-[1px] border-[#5e57574f] py-8">
                        <p className="text-[15px] font-light"> {t("footer.info.title2")}</p>
                        <p className="text-[15px]">+20 011 261 177 01</p>
                    </div>
                    <div className="text-center border border-[1px] border-[#5e57574f] py-8">
                        <p className="text-[15px] font-light"> {t("footer.info.title3")}</p>
                        <a href="mailto:mibo82239@gmail.com" className="text-[15px] text-hover Transition300">mibo82239@gmail.com</a>
                    </div>
                    <div className="text-center border border-[1px] border-[#5e57574f] py-6">
                        <p className="text-[15px] font-light"> {t("footer.info.title4")}</p>
                        <main className="element-center gap-4 py-3">
                            {FooterSocialIcone.map((icon, index) => {
                                return (
                                    <div key={index} className="text-[18px]">
                                        <a href="#" className="hover:text-primary_Color hover:dark:text-[#fff]">{icon}</a>
                                    </div>
                                )
                            })}
                        </main>
                    </div>
                </div>
                <p className="p-8 text-[14px]" dir="ltr"  >© Copyright CozyStay WordPress Theme for Hotel Booking.</p>

            </main>

        </footer>
    )
}
