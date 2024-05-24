import { useTranslation } from 'react-i18next'

import Hero from '../components/Hero/Hero'
import MessageAlert from '../components/intro/Cart/MessageAlert'    
import OrderPrice from '../components/intro/Cart/OrderPrice'
import CartOrderDetails from '../components/intro/Cart/CartOrderDetails'

export default function Cart() {
    const [t] = useTranslation()

    return (
        <div>
            <Hero srcImage={"https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_3699,w_5544/g3hcdkbhdt4t57pvhnae.jpg"} header={t("Cart.PageHeader")} />
            {/* error coupon message or success message will appear the coupon and when delete the any order */}
            <MessageAlert/>
            <section className=' grid grid-cols-1  xl:grid-cols-3 gap-2 px-2  mt-8 '>
                <main className='col-span-2'>
                    <CartOrderDetails />
                </main>
                <OrderPrice />
            </section>

        </div>
    )
}
