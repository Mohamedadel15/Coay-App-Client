import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


import ConfirmBooking from "../../../store/ConfirmBokingContext";
import dark_LanguageContext from "../../../store/UseDarkAndLangContext";
import CartContext from "../../../store/CartBookingContext";
import { currencyFormatAmount } from "../../../utils/helpers";
import { timeout } from "../../../utils/api";

import { AiOutlineClose } from "react-icons/ai";



const IMAGE_URL_BATH = import.meta.env.VITE_API_IMAGE_URL

export default function Order({ DATA }) {
    const [t] = useTranslation()



    // global context api 
    const { lang } = useContext(dark_LanguageContext)
    const { cartItems, setCartItems, dispatchCartInfo } = useContext(CartContext)
    const { dispatch } = useContext(ConfirmBooking)


    const navigate = useNavigate()


    // function to update the order and navigate to room details for this order
    function handleUpdateOrder() {
        dispatch({ type: "BookingCheckIn", value: new Date(DATA.dateIn) })
        dispatch({ type: "BookingCheckOut", value: new Date(DATA.dateOut) })
        dispatch({ type: "GuestNumber", value: DATA.adult })
        dispatch({ type: "RoomNumber", value: DATA.room })
        navigate("/rooms/" + DATA.id)
    }
    function showAlertMessage() {
        document.getElementById("order").scrollIntoView()
        dispatchCartInfo({ type: "ChangeMessage", value: lang === "en" ? `"${DATA.name}  REMOVED` : `  " ${DATA.arName} تم حذفه    ` })
        dispatchCartInfo({ type: "ChangeMessageType", value: "success" })
        setTimeout(() => {
            dispatchCartInfo({ type: "ChangeMessage", value: "" })
            dispatchCartInfo({ type: "ChangeMessageType", value: "success" })
        }, 2000)
    }

    // function to remove the order
    const handleRemoveOrder = async () => {
        showAlertMessage()
        dispatchCartInfo({ type: "ChangeShowSpinner", value: true })
        await timeout(2000)
        const newCartItems = cartItems.filter((item) => {
            return (item.uniqueId !== DATA.uniqueId)
        })
        setCartItems(newCartItems)
        dispatchCartInfo({ type: "ChangeShowSpinner", value: false })
    }



    return (
        <main className='dark:bg-second_color md:dark:bg-inherit dark:rounded-md dark:px-3 md:dark:px-0 dark:shadow-lg  grid grid-cols-1 md:grid-cols-6 md:col-span-2 border-y-[1px] py-5 md:py-0 md:border-y-[0] my-5 gap-4 md:gap-0 '>
            <div className='col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-6 items-center' >
                <div className='col-span-2 md:col-span-1 mb-6 md:mb-0 cursor-pointer  w-full element-center ' >
                    <div
                        onClick={handleRemoveOrder}
                        className='w-fit p-1   rounded-full hover:bg-[red] hover:text-[#fff] Transition300'>
                        <AiOutlineClose />
                    </div>
                </div>
                <h1 className='block md:hidden' >{t(`Cart.OrderDetails.Header1`)}</h1>
                <div className='gap-3 items-center hidden md:flex col-span-2 cursor-pointer '>
                    <img onClick={handleUpdateOrder} className='w-[100px] h-[100px] ' src={IMAGE_URL_BATH + DATA.image} />
                </div>
                <div className='col-span-1 md:col-span-3 '>
                    <h1 onClick={handleUpdateOrder} className='text-[18px] font-bold cursor-pointer text-hover Transition300 '>{lang === "ar" ? DATA.arName : DATA.name}</h1>
                    <p className='my-2 md:my-0 md:leading-5 leading-8 text-[15px]'><strong>{t('Cart.OrderDetails.Date')}</strong>{`: ${DATA.dateIn} - ${DATA.dateOut} `}</p>
                    <p className='leading-8 text-[13px]'><strong>{t('Cart.OrderDetails.Details')}</strong> {`: ${t('Booking.Header4')} : ${DATA.room} , ${t('Booking.Header6')} : ${DATA.adult} `}</p>
                </div>
            </div>
            <div className='text-start md:text-center text-[14px] grid grid-cols-2 md:grid-cols-1'>
                <h1 className='block md:hidden' >{t(`Cart.OrderDetails.Header2`)}</h1>
                <p>{currencyFormatAmount(DATA.price, lang)}</p>

            </div>
            <div className='text-start md:text-center text-[14px] grid grid-cols-2 md:grid-cols-1'>
                <h1 className='block md:hidden' >{t(`Cart.OrderDetails.Header3`)}</h1>
                <p>1</p>
            </div>
            <div className='text-[14px] text-start md:text-center grid grid-cols-2 md:grid-cols-1'>
                <h1 className='block md:hidden' >{t(`Cart.OrderDetails.Header4`)}</h1>
                <p >{currencyFormatAmount(DATA.price, lang)}</p>
            </div>
        </main>
    )
}
