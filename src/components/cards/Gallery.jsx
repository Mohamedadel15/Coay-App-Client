import { useContext, useRef , memo } from 'react';
import { useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';


import useGetData from '../../hooks/UseGetData';
import dark_LanguageContext from '../../store/UseDarkAndLangContext';

import { RiArrowRightSLine } from 'react-icons/ri';

const IMAGE_URL_BATH  = import.meta.env.VITE_API_IMAGE_URL


function Gallery() {
    const { lang } = useContext(dark_LanguageContext)
    const [t] = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { data} = useGetData("services?populate=*");   
    return (
        <section
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.3s ease-in-out"
            }}
            className='grid grid-cols-1 lg:grid-cols-3 xlg:grid-cols-3 gap-5 mt-[-120px] md:mt-[-220px] max-w-full p-3 md:p-0 '>
            {
                data?.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={item.id === 2 ? "mt-0 mt-[50px] xl:mt-[100px] element-center flex-col gap-3 text-black  dark:text-primary_Color " : "element-center flex-col gap-3 text-black dark:text-primary_Color"}>
                        <div className="relative after:absolute cursor-pointer after:w-full after:h-full after:top-[-10px] after:left-[-10px] after:border-[2px] after:border-primary_Color  after:hover:left-0 after:hover:top-0 after:Transition100">
                                <img
                                    src={IMAGE_URL_BATH+item.attributes.image.data.attributes.url}
                                    className="w-[350px] h-[500px] relative hover:scale-[0.99] transition-all duration-200 ease-linear z-50" />
                            </div>
                            <h1
                                className="capitalize text-[30px] font-ligh text-centert cursor-pointer ">
                                {lang === "ar" ? item.attributes.arTittle : item.attributes.title}
                            </h1>
                            <p
                                className="line-clamp-3 max-w-[380px] text-center">
                                {lang === "ar" ? item.attributes.arDescription : item.attributes.description}
                            </p>
                            <button className=" pb-10 element-center  group ">
                                <span
                                    className="w-[fit-content] relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-full after:h-[1px] after:bg-primary_Color group-hover:after:w-0 after:transition-all after:duration-200 after:ease-out">
                                    {t("Experience.Button")}
                                </span>
                                <span className='group-hover:ml-1 transition-all ease-in-out duration-200'><RiArrowRightSLine /></span>
                            </button>
                        </div>

                    )
                })
            }

        </section>
    )
}


export default memo(Gallery)