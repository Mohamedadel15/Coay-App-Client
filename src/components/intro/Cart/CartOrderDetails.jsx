import React, { useContext, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'


import Order from './Order'
import EmptyCart from '../../cards/EmptyCart'
import CartContext from '../../../store/CartBookingContext'
import RemoveSpinner from '../../Spinners/removeSPinner/RemoveSpinner'
import PopupModal from '../../cards/PopupModal'




export default function CartOrderDetails() {
    const [t] = useTranslation()
    const { cartItems, cartInfoState, dispatchCartInfo } = useContext(CartContext)
    const [couponValue, setCouponValue] = useState("")
    const ref = useRef()


    function handleApplyCoupon() {
        //  to scroll for alert 
        ref.current.scrollIntoView()

        // check coupon
        if (couponValue === "MOHAMED99") {
            dispatchCartInfo({ type: "ChangeMessage", value: t("Cart.Coupon.CouponApplied") })
            dispatchCartInfo({ type: "ChangeMessageType", value: "success" })
            dispatchCartInfo({ type: "ChangeCouponApplied", value: true })
            setTimeout(() => {
                dispatchCartInfo({ type: "ChangeMessage", value: "" })
                dispatchCartInfo({ type: "ChangeMessageType", value: "" })
                dispatchCartInfo({ type: "ChangeCouponApplied", value: true })
            }, 3000)
        } else {
            dispatchCartInfo({ type: "ChangeMessage", value: t("Cart.Coupon.CouponNotApplied") })
            dispatchCartInfo({ type: "ChangeMessageType", value: "error" })
            dispatchCartInfo({ type: "ChangeCouponApplied", value: false })

            setTimeout(() => {
                dispatchCartInfo({ type: "ChangeMessage", value: "" })
                dispatchCartInfo({ type: "ChangeMessageType", value: "" })
                dispatchCartInfo({ type: "ChangeCouponApplied", value: false })
            }, 3000)

        }
    }


    const handleInputCoupon = (e) => {
        setCouponValue(e.target.value)
    }

    function handleOpenModal() {
        dispatchCartInfo({ type: "ChangeShowCouponPopup", value: true })
    }


return (
    <section className='px-6 relative' ref={ref} id='order'>
        <main className='hidden md:grid grid-cols-6 gap-5 text-center text-[13px] font-bold py-5 border-y-[1px]'>
            {
                Array.from({ length: 4 }).map((_, index) => (
                    <h1 className={index == 0 ? "col-span-3" : "col-span-1"} key={index}>{t(`Cart.OrderDetails.Header${index + 1}`)}</h1>
                ))
            }
        </main>
        {
            cartItems.length == 0 && <EmptyCart firstTitle={t("Cart.EmptyCart.firstMessage")} secondTitle={t("Cart.EmptyCart.secondMessage")} />
        }
        {
            cartItems.map((item, index) => (
                <Order key={index} DATA={item} />
            ))
        }
        {
            cartInfoState.showSpinner && <RemoveSpinner />
        }
        {
            cartInfoState.ShowCouponPopup && <PopupModal />
        }

        <main className='mt-8 px-6 flex flex-col md:flex-row gap-8'>
            <input
                onChange={handleInputCoupon}
                value={couponValue}
                type="text"
                placeholder={t(`Cart.Coupon.CouponCode`)}
                className='border-[1px] border-primary_Color p-4 outline-none dark:bg-BgDark' />
            <button onClick={handleApplyCoupon} className='bg-primary_Color text-[#fff] px-8 py-2 hover:bg-[#af997b] Transition300'>{t(`Cart.Coupon.ApplyCoupon`)}</button>
            <button onClick={handleOpenModal} className='bg-primary_Color text-[#fff] px-8 py-2 hover:bg-[#af997b] Transition300'>{t(`Cart.Coupon.getCoupon`)}</button>
        </main>
    </section>
)
}
