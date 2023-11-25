import { createContext, useState } from "react"

const showSubBookingMenu = createContext()

export function UaeBookingContext({ children }) {
    const [showBooking, setShowBooking] = useState(false)
    const [showCalender, setShowCalender] = useState(false)
    return (

        <showSubBookingMenu.Provider value={{ showBooking, setShowBooking,showCalender, setShowCalender }}>
            {children}
        </showSubBookingMenu.Provider>
    )
}


export default showSubBookingMenu