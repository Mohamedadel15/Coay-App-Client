import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next"

import HomeServices from "../../../Data/HomeServices";
export default function Services() {
    const ref = useRef(null);
    const ref_Big = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [t] = useTranslation()
    return (
        <section className="pt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 container mx-auto">
            <main className={`w-full order-last lg:order-first`}>
                <div>
                    <img
                        ref={ref_Big}
                        style={{
                            transform: isInView ? "none" : "translateX(-50px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.3s "
                        }}
                        src="https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_800,w_800/oyl1jaei0z6qbqzqnqig.jpg"
                        className="h-[750px]" />
                </div>
                <p className="text-[18px] font-mono mt-5 px-5 ">{t("HomeServices.footer")}</p>
            </main>
            <main>
                <p className="text-[18px] font-mono mt-5 px-5">{t("HomeServices.header")}</p>
                <h1 className="text-[30px] md:text-[40px] my-6 px-5">{t("HomeServices.title")}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {
                        HomeServices().map((item) => {
                            return (
                                <div className="element-center items-start gap-3" key={item.id}>
                                    <div className="text-[50px] text-primary_Color">{item.img}</div>
                                    <div>
                                        <p>{item.title}</p>
                                        <p className="max-w-[240px] mt-2 opacity-80 text-[14px]">Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(50px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.3s "
                    }}
                    className="mt-12">
                    <img
                        src="https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_800,w_800/ghopkrhmgigqaafzqebh.jpg"
                        className="h-[480px] w-full" />
                </div>

            </main>
        </section>
    )
}
