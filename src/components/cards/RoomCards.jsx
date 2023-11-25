import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


import dark_LanguageContext from '../../store/UseDarkAndLangContext'
import ConfirmBooking from '../../store/ConfirmBokingContext'


import { RiArrowRightSLine } from 'react-icons/ri'
import { PiArrowsInSimpleThin } from 'react-icons/pi'
import { BsPersonAdd } from 'react-icons/bs'
import { LiaBathSolid, LiaBedSolid } from 'react-icons/lia'


const IMAGE_URL_BATH = import.meta.env.VITE_API_IMAGE_URL

export default function RoomCards({ room, STYLE }) {
  const { lang } = useContext(dark_LanguageContext)
  const { dispatch } = useContext(ConfirmBooking)
  const [t] = useTranslation()
  const navigate = useNavigate()
  return (
    <section className='container mx-auto py-9 '>
      <main
        onClick={() => {
          dispatch({ type: "ChangePrice", value: room.attributes.price })
          dispatch({ type: "ChangeId", value: room.id })
          navigate(`/rooms/${room.id}`)
        }}
        className={`grid grid-cols-1 md:grid-cols-2`}>
        <div className={`px-2 md:px-8 relative ${STYLE === "stay" && room.id % 2 === 0 ? "order-0 md:order-1" : ""}`}>
          <div className='overflow-hidden '>
            <img
              className={`w-full  ${STYLE === "stay" ? "h-[400px]" : "h-[289px]"} object-cover hover:scale-[1.03] cursor-pointer Transition300`}
              src={IMAGE_URL_BATH + room.attributes.image.data.attributes.url} />
          </div>
          <p className='absolute top-5 left-12 py-1 px-3  text-BgDark text-[17px] bg-[#fff]'>
            {
              lang === "ar" ? room.attributes.arSubDescription + ` ${room.attributes.price}$`
                : room.attributes.subDescribe + ` ${room.attributes.price}$`
            }
          </p>
        </div>
        <div className='px-2 md:px-8 element-center flex-col'>
          <h1 className="mt-5 md-mt-0 max-w-[350px] text-[25px] hover:opacity-50 transition-all ease-in-out duration-200 cursor-pointer">
            {
              lang === "ar" ? room.attributes.arTitle : room.attributes.title
            }

          </h1>
          <div className={`${STYLE === "stay" ? "grid grid-cols-2 md:grid-cols-4 gap-3 my-3" : "hidden"}`}>
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
            <div className='element-center gap-1'>
              <LiaBathSolid className='text-[20px] ' />
              <p className='text-[14px] opacity-80'>{room.attributes.bathRoom}  {t("Rooms.bathRoom")}</p>
            </div>
          </div>
          <p className=" line-clamp-3 opacity-70 max-w-[350px] py-3">
            {
              lang === "ar" ? room.attributes.arPrivateDecs : room.attributes.privateDesc
            }
          </p>
          <p className={`line-clamp-3 opacity-70 ${STYLE === "stay" ? "max-w-[500px]" : "max-w-[350px]"}  line-clamp-4 mb-5`}>
            {
              lang === "ar" ? room.attributes.arDescription : room.attributes.description
            }
          </p>
          <button className=" pb-10 element-center justify-start group ">
            <span
              className={`${lang === "ar" ? "order-last" : ""} w-[fit-content] relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-full after:h-[1px] after:bg-primary_Color group-hover:after:w-0 after:transition-all after:duration-200 after:ease-out`}>
              {t("Experience.Button")}
            </span>
            <span className='group-hover:ml-1 transition-all ease-in-out duration-200'><RiArrowRightSLine /></span>
          </button>
        </div>
      </main>
    </section >
  )
}
