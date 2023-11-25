import React from 'react'
import { useTranslation } from 'react-i18next'

export default function IntroSectionAboutStay() {
    const [t] = useTranslation()
    return (
        <section className=' mt-[100px] elements-center max-w-[800px] mx-auto text-center' >
            <p className=' font-mono text-[15px]'> {t("stay.introSection.Tittle")}</p>
            <h1 className='font-bold text-[35px] my-6'>{t("stay.introSection.Header")}</h1>
            <h4 className='leading-10'>{t("stay.introSection.paragraph")}</h4>

        </section>
    )
}
