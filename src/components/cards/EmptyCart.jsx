import React from 'react'
import { useTranslation } from 'react-i18next';

import nothingImage from '../../assets/Images/Nothing_found.png';
export default function EmptyCart({firstTitle ,secondTitle }) {
    const [t] = useTranslation();
    return (
        <div className='element-center flex-col gap-5 mt-8'>
            <img src={nothingImage} alt="nothing found" />
            <p className='text-[23px] font-mono text-center text-red-400'>{firstTitle}<br />{secondTitle}  </p>
        </div>
    )
}
