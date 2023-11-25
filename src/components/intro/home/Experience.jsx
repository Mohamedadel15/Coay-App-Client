import { useTranslation } from "react-i18next";

import { TbTrees } from 'react-icons/tb';

export default function Experience() {  
  const [t] = useTranslation();
  return (
    <section className=" relative  bg-HomeExperience  w-full max-w-full min-h-[100vh] bg-cover after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgb(0,0,0,0.6)] ">
      <main className="container relative z-20 element-center flex-col p-5  pt-[100px]  gap-3 text-[#fff] dark:text-primary_Color" >
        <TbTrees className=" text-white dark:text-primary_Color text-[65px] opacity-90" />
        <p className="text-[12px]">{t("Experience.Header1")}</p>
        <h1 className="text-center text-[50px] max-w-[700px] font-bold">{t("Experience.Header2")}</h1>
        <p className="text-[18px] max-w-[450px] text-center"> {t("Experience.Header3")}</p>


      </main>



    </section>
  )
}
