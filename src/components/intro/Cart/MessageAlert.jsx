import React, { useContext } from 'react'


import CartContext from '../../../store/CartBookingContext'

import { IoIosDoneAll } from "react-icons/io";

export default function MessageAlert() {
    const {  cartInfoState } = useContext(CartContext)
    return (
        <article className={cartInfoState.userMessage.length > 0 ? 'bg-[#f9f9f9] dark:bg-slate-600 text-BGDark mt-12 p-5 px-12 container mx-auto flex items-center gap-2' : "hidden"}>
        <p className={`text-[18px]  text-[#fff] font-bold rounded-full w-[20px] h-[20px] element-center text-center ${cartInfoState.userMessageType == "success" ? "bg-green-600" : "bg-red-600"}`}>
                {
                    cartInfoState.userMessageType == "success" ? <IoIosDoneAll /> : "!"
                }
            </p>
            <p>{cartInfoState.userMessage}</p>
        </article>
    )
}
