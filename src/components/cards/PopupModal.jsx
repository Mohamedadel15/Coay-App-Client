import React, { useContext, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import CartContext from '../../store/CartBookingContext';

import { FaCopy } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";


export default function PopupModal() {
    const [t] = useTranslation()
    const [copied, setCopied] = useState(false)
    const ref = useRef(null)

    const { dispatchCartInfo } = useContext(CartContext)

    const selectCopied = () => {
        setCopied(true)
        setTimeout(() => { setCopied(false) }, 2000)
        copyToClipboard(ref.current.innerHTML)
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
    }

    function handleCloseModal() {
        dispatchCartInfo({ type: "ChangeShowCouponPopup", value: false })

    }
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100  }}
            id="popup-modal"
            tabindex="-1"
            className="fixed inset-0 z-50 element-center w-full h-full bg-[#66676ae4] dark:bg-[#161717e4]">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={handleCloseModal} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                        <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{t("Cart.Coupon.CouponCode")}</h3>
                        <main className='element-center gap-6'>
                            <p ref={ref} className='p-2 border-2 w-fit pointer-events-none select-none'>MOHAMED99</p>
                            <div onClick={selectCopied} className='p-3 border-2 w-fit cursor-pointer rounded-full' title='copy'>{copied ? <IoMdDoneAll /> : <FaCopy />}</div>
                        </main>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}
