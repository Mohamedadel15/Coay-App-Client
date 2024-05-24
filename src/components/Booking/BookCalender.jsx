import { useContext, useEffect, useReducer, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { formatterDate, initialStateBooking, reduceBooking } from '../../utils/helpers';


import HomeButton from './button/HomeButton';
import Calender from './Calender';
import TotalPrice from './TotalPrice';



import ConfirmBooking from '../../store/ConfirmBokingContext';
import showSubBookingMenu from '../../store/UaeBookingContext';
import dark_LanguageContext from '../../store/UseDarkAndLangContext';


import { AiOutlineClose } from 'react-icons/ai';




export default function BookCalender({ sectionClass }) {
  const [t] = useTranslation()
  const { lang } = useContext(dark_LanguageContext)
  const [errorMessage, setErrorMessage] = useState({
    message: "",
    available: false,
  })
  // to close or Open the calendar menu
  const { showCalender, setShowCalender } = useContext(showSubBookingMenu)
  const { confirmBookingState, dispatch } = useContext(ConfirmBooking)
  const [state, bookingDispatch] = useReducer(reduceBooking, initialStateBooking)
  const pathUrl = useLocation()
  // to change the Date
  const { formattedDateStart, formattedDateEnd } = formatterDate(confirmBookingState.startDate, confirmBookingState.endDate, lang)
  //  to get the params in the url 
  const { id } = useParams()
  function handleCheckFilterRooms() {
    if (confirmBookingState.room > 0 && confirmBookingState.adult >= 2) {
      dispatch({ type: "RoomNumber", value: confirmBookingState.room })
      if (confirmBookingState.children > 6) {
        setErrorMessage({ message: t("RoomDetails.errorMessage.Children"), available: false })
      }
      else {
        dispatch({ type: "ChildrenRange", value: confirmBookingState.children })

        if (confirmBookingState.adult > 12) {
          setErrorMessage({ message: t("RoomDetails.errorMessage.Adult"), available: false })
        } else {
          dispatch({ type: "GuestNumber", value: confirmBookingState.adult })
          setErrorMessage({ ...errorMessage.message, available: true })

        }
      }
    } else {
      if (confirmBookingState.room <= 0) return setErrorMessage({ message: t("RoomDetails.errorMessage.room"), available: false })
      if (confirmBookingState.adult < 2) return setErrorMessage({ message: t("RoomDetails.errorMessage.Adult"), available: false })
    }
  }

  useEffect(() => {
    handleCheckFilterRooms()
  }, [confirmBookingState.children, confirmBookingState.adult, confirmBookingState.room])
  return (
    <section className={`${sectionClass}`}>
      <main
        className='flex w-full  p-3 px-[10px] cursor-pointer  outline-none bg-inherit border-[1px]  dark:text-primary_Color border-primary_Color hover:text-hover Transition300'>
        <p onClick={() => setShowCalender(!showCalender)} className='px-5 flex-1' >{t("Booking.Header1")}</p>
        <p onClick={() => setShowCalender(!showCalender)} className='px-5' >{formattedDateStart}</p>
        <Calender />
      </main>
      <main
        className='dark:text-primary_Color flex  w-full  p-3 px-[10px] cursor-pointer  outline-none bg-inherit border-[1px]  border-primary_Color hover:text-hover Transition300'>
        <p onClick={() => setShowCalender(!showCalender)} className='px-5 flex-1' >{t("Booking.Header2")}</p>
        <p onClick={() => setShowCalender(!showCalender)} className='px-5'>{formattedDateEnd}</p>
      </main>
      <main
        className='dark:text-primary_Color relative flex  w-full  p-3 px-[10px] cursor-pointer  outline-none bg-inherit border-[1px]  border-primary_Color hover:text-hover Transition300 '>
        <p
          onClick={() => bookingDispatch({ type: "ShowRoom" })}
          className='px-5 flex-1 '>{t("Booking.Header4")}</p>
        <p
          onClick={() => bookingDispatch({ type: "ShowRoom" })}
          className='px-5 '>{confirmBookingState.room + t("Booking.Header4")} </p>
        <div className={state.ShowRoom ? "absolute z-30 top-[70px] right-0 w-full  border-[2px] border-primary_Color bg-[#d4d3d3] element-between text-black " : "hidden"}>
          <div
            onClick={() => bookingDispatch({ type: "ShowRoom" })}
            className="absolute top-[-1px] right-0 text-[20px] p-2 border-2 border-primary_Color bg-second_color text-[#fff] cursor-pointer">
            <AiOutlineClose />
          </div>
          <span className="px-6 py-[50px] text-[20px]">{t("Booking.Header4")}</span>
          <span className="px-6 py-[50px] tracking-[10px] text-[20px]" dir="ltr">
            <span className="cursor-pointer p-3" onClick={() => dispatch({ type: "DecreaseRoomNumber" })}>-</span>
            {confirmBookingState.room}
            <span className="cursor-pointer p-3" onClick={() => dispatch({ type: "IncreaseRoomNumber" })}>+</span>
          </span>
        </div>
      </main>
      <main
        className='dark:text-primary_Color relative flex  items-center w-full   cursor-pointer py-3  outline-none bg-inherit border-[1px]   border-primary_Color hover:text-hover Transition300 '>
        <p
          onClick={() => { bookingDispatch({ type: "showNumGuest" }) }}
          className='px-5 flex-1'>
          {t("Booking.Header3")}
        </p>
        <p
          onClick={() => { bookingDispatch({ type: "showNumGuest" }) }}
          className='px-2'>
          {confirmBookingState.adult + t("Booking.Header6")}
          <span className='px-2'>{confirmBookingState.children + t("Booking.Header5")}</span>
        </p>

        <div className={state.showNumGuest ? "absolute z-20 top-[70px] right-0 w-full  border-[2px] border-primary_Color bg-[#d4d3d3] element-between text-black " : "hidden"}>
          <div
            onClick={() => bookingDispatch({ type: "showNumGuest" })}
            className="absolute top-[-1px] right-0 text-[20px] p-2 border-2 border-primary_Color bg-second_color text-[#fff] cursor-pointer">
            <AiOutlineClose />
          </div>
          <div className="w-full flex-col py-5 pr-[40px] dark:text-black">
            <main className='flex px-6 mb-5'>
              <span className="flex-1 text-[20px]">{t("Booking.Header6")}</span>
              <span className="px-3   text-[20px]" dir="ltr">
                <span className="cursor-pointer p-3" onClick={() => dispatch({ type: "DecreaseAdult" })}>-</span>
                {confirmBookingState.adult}
                <span className="cursor-pointer p-3" onClick={() => dispatch({ type: "IncreaseAdult" })}>+</span>
              </span>
            </main>
            <main className='flex px-6'>
              <span className="flex-1 text-[20px]">{t("Booking.Header5")}</span>
              <span className="px-3 text-[20px]" dir="ltr">
                <span className="cursor-pointer p-3" onClick={() => dispatch({ type: "DecreaseChildren" })}>-</span>
                {confirmBookingState.children}
                <span className="cursor-pointer p-3" onClick={() => dispatch({ type: "IncreaseChildren" })}>+</span>
              </span>
            </main>
          </div>
        </div>
      </main>
      {id && <TotalPrice handleErrorFunction={handleCheckFilterRooms} ERRORMESSAGE = {errorMessage.available} />}
      {(pathUrl.pathname === "/" || pathUrl.pathname === "/stay") && <HomeButton />}
      {
        pathUrl.pathname === "/stay" ? (
          null
        ):(
          pathUrl.pathname === "/"?null:(
            <p className={errorMessage.available ? 'hidden' : 'text-[red] text-[14px] w-full'}>{errorMessage.message}</p>
          )
        )
      }
    
    </section>
  )
}
