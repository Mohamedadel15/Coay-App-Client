import { useTranslation } from "react-i18next";



import introHomeLogo from "../../../assets/Images/IntroHome1.png";


export default function HomeIntro() {
    const [t] = useTranslation();
    return (
        <section className="bg-[#F3F3F0] dark:bg-BgDark pb-[280px] max-w-full">
            <div className='container element-center flex-col  gap-5 py-12 px-4 md-px-0 '>
                <img src={introHomeLogo} alt="Home Intro" className=" max-w-[100px]  opacity-[0.5] dark:bg-green-50 dark:rounded-lg " />
                <p className=" font-semibold opacity-[0.5] text-[12px]">{t("HomeIntro.Header1")}</p>
                <h1 className=" text-center text-[50px] max-w-[700px] font-bold ">{t("HomeIntro.Header2")}</h1>
                <p className=" text-center text-[15px] max-w-[700px] leading-loose ">
                    {t("HomeIntro.Header3")}
                </p>
            </div>
        </section>

    )
}
