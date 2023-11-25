import React from 'react'
import { useTranslation } from 'react-i18next'


import Hero from '../components/Hero/Hero'
import CheckOutValidationForm from '../components/intro/checkOut/CheckOutValidationForm'

export default function CheckOut() {
  const [t] = useTranslation()
  return (
<div className= ''>
      <Hero srcImage={"https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_3699,w_5544/g3hcdkbhdt4t57pvhnae.jpg"} header={t("CheckOut.PageHeader")} />
      <CheckOutValidationForm/>
    </div>
  )
}
