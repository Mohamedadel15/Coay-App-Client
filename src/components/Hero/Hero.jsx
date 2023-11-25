import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

import showSubBookingMenu from "../../store/UaeBookingContext";


export default function Hero({ srcImage, header, subtitle }) {
  const [t] = useTranslation();
  const { pathname } = useLocation();
  const { setShowBooking } = useContext(showSubBookingMenu);

  return (
    <div
      className={`text-white dark:text-primary_Color w-full max-w-full overflow-hidden   min-h-[660px]  relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.4)] after:dark:bg-[rgba(0,0,0,0.7)] `}
    >
      <img src={srcImage} alt="Hero Logo For this Section " className="absolute top-0 left-0 w-full h-full " />
      <div className="relative z-30 mt-[200px]">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-[50px] text-lg-[80px] element-center text-center mt-[100px] font-bold">
          {header}
        </motion.h1>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-[25px] font-[100] element-center py-10 text-center">
          {subtitle}
        </motion.p>
        <div className={pathname === "/" || pathname === "/stay" ? "w-full element-center mb-9 md:mb-0 xl:hidden" : "hidden"} >
          <button onClick={() => setShowBooking(true)} className="px-4 py-2 text-[#fff] dark:text-[black]  bg-primary_Color">{t("Header5")}</button>
        </div>


      </div>
    </div>
  );
}
