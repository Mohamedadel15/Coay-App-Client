import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { addDays } from 'date-fns';

import { initialStateBooking, reduceBooking } from '../../utils/helpers'


import { timeout } from '../../utils/api';
import CircleSpinner from '../Spinners/circleSpiner/CircleSpinner';
import ConfirmBooking from '../../store/ConfirmBokingContext'
import CartContext from '../../store/CartBookingContext';
import dark_LanguageContext from '../../store/UseDarkAndLangContext';

import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose } from 'react-icons/ai';



export default function TotalPrice({ isActiveBtn, ERRORMESSAGE }) {
    // to fetch data in server side 
    const loaderData = useLoaderData()

    // the list of  date is not  available for  Booking it
    const listDays = {
        1: [new Date()],
        2: [new Date()],
        3: [new Date()],
        4: [new Date()],
        5: [new Date()],
        6: [new Date()],
        7: [new Date()],
        8: [new Date()],
        ...JSON.parse(localStorage.getItem("listDays"))
    }


    //  context api 
    const { cartItems, setCartItems } = useContext(CartContext)
    const { confirmBookingState, dispatch } = useContext(ConfirmBooking)
    const { lang } = useContext(dark_LanguageContext)

    // local reducer to change a lot of information about ur room
    const [state, bookingDispatch] = useReducer(reduceBooking, initialStateBooking)

    // local state to check the message error and available or not
    const [isActive, setIsActive] = useState(false)
    const [errorMessage, setErrorMessage] = useState({
        message: "",
        available: false,
    })


    const navigate = useNavigate()

    const [t] = useTranslation()


    //  variable to handle  the price
    let MassagePrice = (state.CheckedRoomMassage && state.NumMassage * 30) || 0,
        SpaPrice = (state.CheckedRoomDaySpa && state.NumDaySpa * 40) || 0,
        CleanPrice = (state.CheckedRoomClean && 12) || 0,
        startDate = new Date(confirmBookingState.startDate).getDate() || new Date().getDate(),
        endDate = new Date(confirmBookingState.endDate).getDate() || addDays(new Date(), 1).getDate(),
        totalNumberDays = endDate - startDate || 1




    function handleBookDateError() {
        if (ERRORMESSAGE) {
            addTicket()
            dispatch({ type: "ChangePrice", value: TotalPrice() })
        }
    }

    // function to make the spinner await before navigate the cart page
    async function handleBookDateDone() {
        await timeout(2000)
        navigate("/stay/cart")
        dispatch({ type: "ChangeDateAvailable", value: false })
    }



    function TotalPrice() {
        return (totalNumberDays * loaderData?.attributes?.price) + MassagePrice + SpaPrice + CleanPrice
    }

    // function to add booking and check the date if available for booking or not 
    function addTicket() {
        //  the date that user checked it 
        const checkedDate =  new Date(confirmBookingState.endDate).getDate()
        const checkedMonth =  new Date(confirmBookingState.endDate).getMonth()

        //   the date is available that u can Booking it
        const availableDays = listDays[loaderData.id].filter(day => (new Date(day).getDate() === checkedDate) && (new Date(day).getMonth() === checkedMonth))
        if (availableDays[0]) {
            dispatch({ type: "ChangeDateAvailable", value: false })
            listDays[loaderData.id]
            setErrorMessage({ message: t("RoomDetails.errorMessage.DateMessagefalse"), available: false })
        } else {
            dispatch({ type: "ChangeDateAvailable", value: true })
            listDays[loaderData.id].push(new Date(confirmBookingState.endDate))
            handleAddBookingOrder()
            setErrorMessage({ message: t("RoomDetails.errorMessage.TrueMessage"), available: true })
        }

        localStorage.setItem("listDays", JSON.stringify(listDays))
    }




    //  function to add  anew date with all info for this booking in the global context 
    function handleAddBookingOrder() {
        setCartItems([...cartItems, {
            uniqueId:Math.random(),
            id: loaderData.id,
            name: loaderData.attributes.title,
            arName: loaderData.attributes.arTitle,
            image: loaderData.attributes.image.data.attributes.url,
            price: TotalPrice(),
            quantity: 1,
            dateIn: new Date(confirmBookingState.startDate).toLocaleDateString(),
            dateOut: new Date(confirmBookingState.endDate).toLocaleDateString(),
            adult: confirmBookingState.adult,
            room: confirmBookingState.room,
        }])
    }




    useEffect(() => {
        if (confirmBookingState.DateAvailable ) {
            handleBookDateDone()
        }
    }, [confirmBookingState.DateAvailable])


    return (
        <>
            <main className="w-full flex flex-col gap-3 border-b-2 pb-8">
                <p>{t("RoomDetails.ExtraServices")}</p>
                <article className='element-between mb-4'>
                    <div className="flex items-center">
                        <input
                            id="disabled-checkbox"
                            type="checkbox"
                            value=""
                            className="cursor-pointer w-5 h-5"
                            onChange={(e) => bookingDispatch({ type: "CheckedRoomClean", value: e.target.checked })}
                        />
                        <label htmlFor="disabled-checkbox" className="cursor-pointer  mx-2 text-sm font-medium text-gray-400 dark:text-gray-500">{t("RoomDetails.RoomClean.name")}</label>
                    </div>
                    <p>{t("RoomDetails.RoomClean.desc")} </p>
                </article>
                <article className='element-between mb-4'>
                    <div className="flex items-center ">
                        <input
                            id="disabled-checked-checkbox"
                            type="checkbox"
                            value=""
                            className="cursor-pointer w-5 h-5"
                            onChange={(e) => {
                                bookingDispatch({ type: "CheckedRoomMassage", value: e.target.checked })
                            }}

                        />
                        <label htmlFor="disabled-checked-checkbox" className="cursor-pointer  mx-2 text-sm font-medium text-gray-400 dark:text-gray-500">{t("RoomDetails.Massage.name")}</label>
                    </div>
                    <div>
                        <div className='element-between gap-4 relative'>
                            <p className=' text-[15px]'>{t("RoomDetails.Massage.desc")}</p>
                            <p
                                onClick={() => { bookingDispatch({ type: "showNumMassage" }) }}
                                className='element-between dark:text-primary_Color flex px-[9px]  cursor-pointer  border-[1px] text-black border-primary_Color hover:text-hover Transition300'>
                                {state.NumMassage}
                                <MdKeyboardArrowDown className='ml-2' />
                            </p>
                            <div className={state.sowNumMassage ? "absolute z-30 top-[30px] right-0 w-full  border-[2px] border-primary_Color bg-[#d4d3d3] element-between dark:text-black " : "hidden"}>
                                <div
                                    onClick={() => bookingDispatch({ type: "showNumMassage" })}
                                    className="absolute top-[-1px] right-0 text-[13px] p-2 border-2 border-primary_Color bg-second_color text-[#fff] cursor-pointer">
                                    <AiOutlineClose />
                                </div>
                                <span className="px-6 py-[25px] tracking-[10px] text-[20px]" dir="ltr">
                                    <span className="cursor-pointer p-3" onClick={() => bookingDispatch({ type: "DecreaseNumMassage" })}>-</span>
                                    {state.NumMassage}
                                    <span className="cursor-pointer p-3" onClick={() => bookingDispatch({ type: "IncreaseNumMassage" })}>+</span>
                                </span>
                            </div>

                        </div>
                    </div>
                </article>
                <article className='element-between mb-4'>
                    <div className="flex items-center">
                        <input
                            id="checked-checkbox"
                            type="checkbox"
                            value=""
                            className="cursor-pointer w-5 h-5"
                            onChange={(e) => {
                                bookingDispatch({ type: "CheckedRoomDaySpa", value: e.target.checked })
                            }}
                        />
                        <label htmlFor="checked-checkbox" className="cursor-pointer  mx-2 text-sm font-medium text-gray-400 dark:text-gray-500">{t("RoomDetails.DaySpa.name")}</label>
                    </div>
                    <div className='element-between gap-4 relative'>
                        <p className=' text-[15px]'>{t("RoomDetails.DaySpa.desc")}</p>
                        <p
                            onClick={() => { bookingDispatch({ type: "showNumDaySpa" }) }}
                            className='element-between dark:text-primary_Color flex px-[9px]  cursor-pointer  border-[1px] text-black border-primary_Color hover:text-hover Transition300'>
                            {state.NumDaySpa}
                            <MdKeyboardArrowDown className='ml-2' />
                        </p>
                        <div className={state.sowNumDaySpa ? "absolute z-30 top-[30px] right-0 w-full  border-[2px] border-primary_Color bg-[#d4d3d3] element-between dark:text-black " : "hidden"}>
                            <div
                                onClick={() => bookingDispatch({ type: "showNumDaySpa" })}
                                className="absolute top-[-1px] right-0 text-[13px] p-2 border-2 border-primary_Color bg-second_color text-[#fff] cursor-pointer">
                                <AiOutlineClose />
                            </div>
                            <span className="px-6 py-[25px] tracking-[10px] text-[20px]" dir="ltr">
                                <span className="cursor-pointer p-3" onClick={() => bookingDispatch({ type: "DecreaseNumDaySpa" })}>-</span>
                                {state.NumDaySpa}
                                <span className="cursor-pointer p-3" onClick={() => bookingDispatch({ type: "IncreaseNumDaySpa" })}>+</span>
                            </span>
                        </div>
                    </div>
                </article>
            </main>
            <section className={!isActiveBtn ? 'element-center flex-col w-full' : 'hidden'}>
                <div className='element-between w-full'>
                    <p
                        onClick={() => {
                            setIsActive(!isActive)

                        }}
                        className='text-[25px] font-bold element-center gap-2 cursor-pointer'>
                        {t("RoomDetails.totalPrice.TotalCost")}
                        <MdKeyboardArrowDown />
                    </p>
                    <p className='text-[22px] font-mono'>{TotalPrice() + " $"}</p>
                </div>
                <main>

                </main>
            </section>
            <section className={isActive ? "w-full flex flex-col gap-3 pb-6" : "hidden"}>
                <div className='element-between w-full border-t-2 py-3'>
                    <p className=''> {t("RoomDetails.totalPrice.TotalBasePrice")}</p>
                    <p > {" $ " + loaderData?.attributes?.price}</p>
                </div>
                <div className='element-between w-full border-t-2 py-3'>
                    <p className=''> {t("RoomDetails.totalPrice.ExtraServices")}</p>
                    <p > {" $ " + (SpaPrice + MassagePrice + CleanPrice)}</p>
                </div>
                <div className='element-between w-full border-t-2 py-3'>
                    <p className=''> {t("RoomDetails.totalPrice.BasePriceBreakdown")}</p>
                    <p > {totalNumberDays + "  " + t("RoomDetails.night")}</p>
                </div>
                <div className='element-between w-full border-t-2 py-3'>
                    <p className='font-bold text-[20px]'> {t("RoomDetails.totalPrice.Total")}</p>
                    <p > {" $ " + TotalPrice()}</p>
                </div>
            </section>
            <button
                onClick={handleBookDateError}
                className={!isActiveBtn ? `bg-BgDark hover:bg-primary_Color dark:hover:bg-slate-400 Transition300 dark:bg-primary_Color text-[#fff] p-3 w-full rounded-lg ${confirmBookingState.DateAvailable && "pointer-events-none"}` : `hidden`}>
                {
                    confirmBookingState.DateAvailable ? (<CircleSpinner />) : (lang === "en" ? "Book Your Stay Now" : "احجز إقامتك الآن")
                }
            </button>
            <p className={errorMessage.available ? 'text-[green] text-[14px] w-full' : 'text-[red] text-[14px] w-full'}>{errorMessage.message}</p>
        </>
    )
}
