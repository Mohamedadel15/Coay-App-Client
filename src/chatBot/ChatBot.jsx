import { useState } from 'react';

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import config from "./config";
import MessageParser from "./MessageParser"
import ActionProvider from "./ActionProvider";


import { BsChatRightDotsFill } from "react-icons/bs"




export default function ChatBot() {
    const [isActive, setIsActive] = useState(false)
    return (
        <main className='fixed bottom-2 right-5  veryTopZIndex ' >
            <div dir='rtl'>

                <BsChatRightDotsFill
                    onClick={() => setIsActive(!isActive)}
            className={!isActive?'text-[35px] cursor-pointer text-primary_Color Transition300':'text-[25px] cursor-pointer  text-primary_Color Transition300'} />


            </div>
        <section dir='ltr' className={isActive ? "block" : "hidden"}>
                <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            </section>
        </main>
    )
}
