import { useContext } from 'react'
import {  useNavigate } from 'react-router-dom'

import dark_LanguageContext from '../../../store/UseDarkAndLangContext'
import showSubBookingMenu from '../../../store/UaeBookingContext'

export default function HomeButton() {
    const navigate = useNavigate()
    const { lang } = useContext(dark_LanguageContext)
    const { setShowBooking } = useContext(showSubBookingMenu);
    function handleFiltersRooms() {
        navigate(`/stay/rooms`)
        setShowBooking(false)
    }
    return (
        <button
            onClick={handleFiltersRooms}
            className={`bg-primary_Color text-[#fff] p-3 ${lang === "en" ? "ml-9" : "mr-9"}`}>
            {lang === "en" ? "Check Availability" : "التحقق من التوفر"}
        </button>
    )
}
