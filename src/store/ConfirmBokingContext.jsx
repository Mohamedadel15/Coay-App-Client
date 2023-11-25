import {useReducer , createContext} from 'react'
import { initialStateConfirmBooking, reduceConfirmBooking } from '../utils/helpers'

const ConfirmBooking = createContext()
export  function ConfirmBookingContext({children}) {
    const [confirmBookingState,dispatch]=useReducer(reduceConfirmBooking,initialStateConfirmBooking)
  return (
<ConfirmBooking.Provider value={{confirmBookingState,dispatch}} >
      {children}
    </ConfirmBooking.Provider>

  )
}

export default ConfirmBooking;
