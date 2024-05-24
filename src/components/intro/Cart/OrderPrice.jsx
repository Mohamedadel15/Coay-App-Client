import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import CircleSpinner from "../../Spinners/circleSpiner/CircleSpinner"

import CartContext from '../../../store/CartBookingContext'
import dark_LanguageContext from '../../../store/UseDarkAndLangContext'
import ConfirmBooking from '../../../store/ConfirmBokingContext'

import { currencyFormatAmount } from '../../../utils/helpers'
import { timeout } from '../../../utils/api'

export default function OrderPrice() {
    const [t] = useTranslation()

    const { cartItems, cartInfoState , dispatchCartInfo } = useContext(CartContext)
    const { lang } = useContext(dark_LanguageContext)
    const {  dispatch ,confirmBookingState } = useContext(ConfirmBooking)

    const navigate = useNavigate()

    function calcAllOrderPrice() {
        let sum = cartItems.map(item => {
            return item.price
        }).reduce((acc, curr) => {
            return acc + curr
        }, 0)
        // function to change the price format
        return sum
    }

    async function handleProcessOrder() {
        dispatch({ type: "ChangeDateAvailable", value: true })
        dispatchCartInfo({type:"ChangeTotalPrice" , value: discountCoupon()})
        await timeout(2000)
        localStorage.getItem("token") ? navigate("/stay/checkOut") : navigate("/login")
        dispatch({ type: "ChangeDateAvailable", value: false })
    }

    function discountCoupon() {
    return cartItems.length === 0  ?  currencyFormatAmount(calcAllOrderPrice(), lang)    :  currencyFormatAmount(calcAllOrderPrice() * 0.8, lang)    
    }

    return (
        <div className='bg-[#f9f9f9] dark:bg-second_color p-6 h-fit '>
            <h1 className='text-[25px] pb-6 pt-2 border-b-[1px] border-[#0000001f] '>{t("Cart.OrderPrice.Tittle")}</h1>
            <div className='border-b-[1px] border-[#0000001f] element-between py-5 '>
                <p className='text-[15px] font-bold '>{t("Cart.OrderPrice.Subtotal")}</p>
                <p className={`text-[15px] text-[#0000008a] ${cartInfoState.couponApplied ? "line-through" : ""}`}>{currencyFormatAmount(calcAllOrderPrice(), lang)}</p>

            </div>
            <div className='border-b-[1px] border-[#0000001f] element-between py-5'>
                <p className='text-[15px] font-bold '>{t("Cart.OrderPrice.Total")}</p>
                <p className={`text-[15px]`}>{cartInfoState.couponApplied ? discountCoupon() : currencyFormatAmount(calcAllOrderPrice(), lang)}</p>
            </div>
            <button
                onClick={handleProcessOrder}
    className={`${cartItems.length == 0 ? "pointer-events-none opacity-25" : ""} mb-10 mt-6 w-full bg-black text-[#fff] py-4 hover:bg-primary_Color Transition300`} >{confirmBookingState.DateAvailable ? (<CircleSpinner />) : t("Cart.OrderPrice.Button")}</button>
        </div>
    )
}
