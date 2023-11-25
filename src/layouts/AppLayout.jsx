import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import BtnSrollToTop from '../utils/BtnSrollToTop'
import ChatBot from '../chatBot/ChatBot'
import SideNav from '../components/Header/SideNav'

export default function AppLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <BtnSrollToTop />
            <ChatBot />
            <Footer />
        </div>
    )
}


