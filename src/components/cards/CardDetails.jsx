import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import dark_LanguageContext from '../../store/UseDarkAndLangContext';
import ConfirmBooking from '../../store/ConfirmBokingContext';


import { RiArrowRightSLine } from 'react-icons/ri';
import { PiArrowsInSimpleThin } from 'react-icons/pi';
import { BsPersonAdd } from 'react-icons/bs';
import { LiaBedSolid } from 'react-icons/lia';

const IMAGE_URL_BATH  = import.meta.env.VITE_API_IMAGE_URL


export default function CardDetails({ room }) {
    const { lang } = useContext(dark_LanguageContext)
    const { dispatch  } = useContext(ConfirmBooking)
    const navigate = useNavigate()
    const [t] = useTranslation()
    return (
        <div
            onClick={() => {
                dispatch({ type: "ChangePrice", value: room.attributes.price })
                navigate(`/rooms/${room.id}`)
            }}
            className='w-[380px] max-w-full  flex flex-col gap-3 relative p-2'>
            <p className='absolute top-5 left-5 text-[14px] opacity-80 bg-white p-3 uppercase   '>
                {
                    lang === "ar" ? `${room.attributes.arSubDescription} ${room.attributes.price}$ ` : `${room.attributes.subDescribe} ${room.attributes.price}$ `
                }</p>
            <div className='overflow-hidden'>
                <img
                    className=" scaleHover w-full h-[380px] cursor-pointer Transition300"
                    src={IMAGE_URL_BATH+room.attributes.image.data.attributes.url} />
            </div>
            <h1 className="max-w-[350px] text-[25px] hover:opacity-50 transition-all ease-in-out duration-200 cursor-pointer">{
                lang === "ar" ? room.attributes.arTitle : room.attributes.title
            }</h1>
            <div className='flex gap-5 '>
                <div className='element-center gap-1'>
                    <PiArrowsInSimpleThin className='border border-[2px] text-[20px] ' />
                    <p className='text-[14px] opacity-80'>{room.attributes.placement} {t("Rooms.m2")}</p>
                </div>
                <div className='element-center gap-1'>
                    <BsPersonAdd className='text-[20px] ' />
                    <p className='text-[14px] opacity-80'>{room.attributes.guest} {t("Rooms.Guest")}</p>
                </div>
                <div className='element-center gap-1'>
                    <LiaBedSolid className='text-[20px] ' />
                    <p className='text-[14px] opacity-80'>{room.attributes.beds}  {t("Rooms.Beds")}</p>
                </div>
            </div>
            <p className=" line-clamp-3 opacity-70 max-w-[350px]">{
                lang === "ar" ? room.attributes.arDescription : room.attributes.description
            }</p>
            <button className=" pb-10 element-center justify-start group ">
                <span
                    className={`${lang === "ar" ? "order-last" : ""} w-[fit-content] relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-full after:h-[1px] after:bg-primary_Color group-hover:after:w-0 after:transition-all after:duration-200 after:ease-out`}>
                    {t("Experience.Button")}
                </span>
                <span className='group-hover:ml-1 transition-all ease-in-out duration-200'><RiArrowRightSLine /></span>
            </button>
        </div>
    )
}
