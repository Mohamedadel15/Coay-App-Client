import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import BtnSrollToTop from '../utils/BtnSrollToTop'
import ChatBot from '../chatBot/ChatBot'
import SideNav from '../components/Header/SideNav'
import Notify from './Notify'

export default function AppLayout() {
    return (
        <div>
            <Notify />
            <Header />
            <Outlet />
            <BtnSrollToTop />
            <ChatBot />
            <Footer />
        </div>
    )
}


