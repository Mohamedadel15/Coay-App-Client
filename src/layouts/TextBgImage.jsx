import { useTranslation } from 'react-i18next';


import { SiCoffeescript } from 'react-icons/si';
import { AiFillStar } from 'react-icons/ai';

export default function TextBgImage() {
  const [t] = useTranslation();
  return (
    <section className="max-w-full bg-HomeExperience2 relative w-full min-h-[100vh] bg-cover after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgb(0,0,0,0.7)] after:dark:bg-[rgb(0,0,0,0.8)] ">
      <main className="container relative z-20 element-center flex-col p-5  pt-[100px]  gap-8 md:gap-3 text-[#fff] dark:text-primary_Color" >
        <SiCoffeescript className=" text-white dark:text-primary_Color text-[65px] opacity-90" />
        <p className="text-[12px]">{t("Experience2.Header1")}</p>
        <h1 className="text-center text-[20px] md:text-[40px] max-w-[700px] font-bold">{t("Experience2.Header2")}</h1>
        <p className="text-[18px] max-w-[450px] text-center"> {t("Experience2.Header3")}</p>
        <div className='flex gap-2'>
          {
            Array.from({ length: 5 }, (_, index) => {
              return <AiFillStar key={index} className="text-primary_Color text-[15px]" />
            })
          }
        </div>

      </main>



    </section>
  )
}
