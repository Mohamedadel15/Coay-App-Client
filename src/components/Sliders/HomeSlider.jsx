import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

import Slider from "./Slider";
import { homeImageSlider } from "../../Data/Data";




export default function HomeSlider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [t] = useTranslation();


  return (
    <section
    ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
      }}

      className="container" >
      <div
        dir="ltr"
        className="p-10 px-5  mt-[-300px] element-center max-w-full overflow-hidden " >

        {/* 
          === home_Swiper is tailwind class for swiper in contain px-[0] md:px-[60px]  lg:px-[50px] ===
          === home_Swiper-Slide is tailwind class for swiper slide in contain h-[450px] md:h-[450px] lg:h-[550px] w-[520px] cursor-pointer ===
         */}
        <Slider SwiperClass="home_Swiper" SwiperSlideClass="home_Swiper-Slide"  images={homeImageSlider} />
      </div>
      <p className="text-[20px] md:ps-[120px] px-3 pb-8 font-mono ">{t("HomeIntro.Header4")}</p>
    </section>

  )
}
