import React, { useContext } from 'react'

import BookCalender from './BookCalender';
import showSubBookingMenu from '../../store/UaeBookingContext';

import { AiOutlineClose } from "react-icons/ai";

export default function BookMenuSM() {
    const { setShowBooking, showBooking } = useContext(showSubBookingMenu);
    return (
        <div className={showBooking ? "element-center flex-col gap-5 fixed top-0 left-0 h-full w-full bg-second_color z-50 dark:bg-BgDark text-[#fff]   Transition300 opacity-100 scale-100" : "scale-0 opacity-0 Transition300 fixed top-[0] left-0"}>
            <div
                onClick={() => setShowBooking(false)}
                className="absolute top-5 right-5 p-1 bg-black dark:border-primary_Color dark:border-[1px] dark:hover:bg-primary_Color dark:hover:text-[#fff] text-[22px] cursor-pointer Transition300">
                <AiOutlineClose />
            </div>
            <BookCalender sectionClass="book_Style-Room" />
        </div>
    )
}
