
import { addDays } from 'date-fns';
import {toast} from "react-toastify";


// --------- Constant Toasty Components ------------
export const notifyData = (header, type) => {
  switch (type) {
      case "error":
          toast.error(header, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
          });
          break;
      case "success":
          toast.success(header, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
          });
          break;
      case "warn":
          toast.warn(header, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
          });
          break;
      default:
          break;
  }
};



export const initialStateBooking = {
  ShowRoom: false,
  showNumGuest: false,
  sowNumMassage: false,
  NumMassage: 1,
  sowNumDaySpa: false,
  NumDaySpa: 1,
  CheckedRoomClean: false,
  CheckedRoomMassage: false,
  CheckedRoomDaySpa: false,

}

export const reduceBooking = (state, action) => {
  switch (action.type) {
    case "ShowRoom":
      return { ...state, ShowRoom: !state.ShowRoom }
    case "showNumGuest":
      return { ...state, showNumGuest: !state.showNumGuest }
    case "showNumMassage":
      return { ...state, sowNumMassage: !state.sowNumMassage }
    case "showNumDaySpa":
      return { ...state, sowNumDaySpa: !state.sowNumDaySpa }
    case "IncreaseNumMassage":
      return { ...state, NumMassage: state.NumMassage + 1 }
    case "DecreaseNumMassage":
      return { ...state, NumMassage: state.NumMassage - 1 }
    case "IncreaseNumDaySpa":
      return { ...state, NumDaySpa: state.NumDaySpa + 1 }
    case "DecreaseNumDaySpa":
      return { ...state, NumDaySpa: state.NumDaySpa - 1 }
    case "CheckedRoomClean":
      return { ...state, CheckedRoomClean: action.value }
    case "CheckedRoomMassage":
      return { ...state, CheckedRoomMassage: action.value }
    case "CheckedRoomDaySpa":
      return { ...state, CheckedRoomDaySpa: action.value }

    default:
      return state
  }

}

export const initialStateConfirmBooking = {
  startDate: new Date(),
  endDate:new Date(Date.now() + 1000*60 *60 *24),
  adult: 2,
  children: 0,
  room: 1,
  totalPrice: 0,
  RoomId: 0,
  DateAvailable: false
}

export function reduceConfirmBooking(state, action) {
  switch (action.type) {
    case "IncreaseRoomNumber":
      return { ...state, room: state.room + 1 }
    case "DecreaseRoomNumber":
      return { ...state, room: state.room - 1 }
    case "IncreaseAdult":
      return { ...state, adult: state.adult + 1 }
    case "DecreaseAdult":
      return { ...state, adult: state.adult - 1 }
    case "IncreaseChildren":
      return { ...state, children: state.children + 1 }
    case "DecreaseChildren":
      return { ...state, children: state.children - 1 }
    case "BookingCheckIn":
      return { ...state, startDate: action.value }
    case "BookingCheckOut":
      return { ...state, endDate: action.value }
    case "GuestNumber":
      return { ...state, adult: action.value }
    case "ChildrenRange":
      return { ...state, children: action.value }
    case "RoomNumber":
      return { ...state, room: action.value }
    case "ChangePrice":
      return { ...state, totalPrice: action.value }
    case "ChangeId":
      return { ...state, RoomId: action.value }
    case "ChangeDateAvailable":
      return { ...state, DateAvailable: action.value }
    default: return state
  }

}

export const initialStateCartInfo = {
  userMessage:"",
  userMessageType:"",
  couponApplied: false,
  showSpinner: false,
  ShowCouponPopup: false,
  totalPrice: 0  // totalPrice for all orders 
}

export function cartInfoReducer(state, action) {
  switch (action.type) {
    case "ChangeMessage":
      return { ...state, userMessage: action.value }
    case "ChangeMessageType":
      return { ...state, userMessageType: action.value }
    case "ChangeCouponApplied":
      return { ...state, couponApplied: action.value }
    case "ChangeShowSpinner":
      return { ...state, showSpinner: action.value }
    case "ChangeShowCouponPopup":
      return { ...state, ShowCouponPopup: action.value }
    case "ChangeTotalPrice":
      return { ...state, totalPrice: action.value }
    default:
      return state
  }
}

export function formatterDate(startDate, endDate, lang) {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const formattedDateStart = (startDate || new Date()) // if context date is empty when the initial render
    .toLocaleDateString(`${lang === "ar" ? "ar-EG" : "en-US"}`, options);
  const formattedDateEnd = (endDate || addDays(new Date(), 1)) // if context date is empty when the initial render
    .toLocaleDateString(`${lang === "ar" ? "ar-EG" : "en-US"}`, options);

  return { formattedDateStart, formattedDateEnd }
}


export const initialHeaderReducer = {
  languageToggle: false
}

export function headerReducer(state, action) {
  switch (action.type) {
    case "ShowLanguageToggle":
      return { ...state, languageToggle: !state.languageToggle }
    default:
      return state
  }

}

export function currencyFormatAmount(amount ,lang) {
  const currencyFormatter = new Intl.NumberFormat(lang === "ar" ? "ar-EG" : "USD", {
    style: 'currency',
    currency: lang === "ar" ? "EGP" : 'USD',
  });
  const formattedAmount = currencyFormatter.format(amount);
  return formattedAmount
}

