import Hero from '../components/Hero/Hero'
import { useTranslation } from 'react-i18next'
import RegisterForm from '../components/auth/RegisterForm'

export default function RegisterPage() {
    const [t] = useTranslation()
    return (
        <div className=''>
            <Hero srcImage={"https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_3699,w_5544/g3hcdkbhdt4t57pvhnae.jpg"} header={t("Auth.Register.Header")} />
            <RegisterForm/>
        </div>
    )
}
