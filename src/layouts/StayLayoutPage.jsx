import React from 'react'
import Hero from '../components/Hero/Hero'

import { useTranslation } from "react-i18next";
import { Outlet } from 'react-router-dom';

export default function StayLayoutPage() {
  const [t] = useTranslation()
  return (
    <div>
        <Outlet />
    </div>
  )
}
