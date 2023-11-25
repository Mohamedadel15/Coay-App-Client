import { useContext, useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import dark_LanguageContext from '../../store/UseDarkAndLangContext';
import showSubBookingMenu from '../../store/UaeBookingContext';
import ConfirmBooking from '../../store/ConfirmBokingContext';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Calender() {
    const { lang } = useContext(dark_LanguageContext)
    const { showCalender, setShowCalender } = useContext(showSubBookingMenu)
    const { dispatch , confirmBookingState } = useContext(ConfirmBooking)
    // To Change the Date
    const [newState, setNewState] = useState([
        {
            startDate: confirmBookingState.startDate || new Date() ,
            endDate:confirmBookingState.endDate || addDays(new Date(), 1),
            key: 'selection'
        }
    ]);
    return (
        <>
            <div className={showCalender ? "block relative" : "hidden"} dir="ltr">
                <div>
                    <DateRangePicker
                        onChange={item => setNewState([item.selection])}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={1}
                        ranges={newState}
                        direction="horizontal"
                        rangeColors={["#b99d75"]}
                        color={"#fff"}
                        className={`absolute  top-[120px] ${lang === "en" ? "right-[-20px] md:right-[-100px] " : "lef-[-20px] md:left-[-100px]"}  text-second_color element-center dark:bg-inherit  z-50`}
                    />
                </div>

                <div className={`element-between w-[330px] bg-primary_Color text-[#fff]   dark:second_color absolute ${lang === "en" ? "right-[-20px] md:right-[-100px] " : "lef-[-20px] md:left-[-100px]"}  top-[72px] z-50 `} >
                    <button
                        className="p-3 px-[60px]   text-hover Transition300 hover:bg-[#fff]  hover:dark:bg-BgDark"
                        onClick={() => setShowCalender(false)}>
                        Cancel
                    </button>
                    <button
                        className="p-3  px-[60px] text-hover border-l-2 Transition300 hover:bg-[#fff] hover:dark:bg-BgDark"
                        onClick={() => {
                            setShowCalender(false)
                            dispatch({ type: "BookingCheckOut", value: newState[0].endDate })
                            dispatch({ type: "BookingCheckIn", value: newState[0].startDate })
                        }}>
                        Apply
                    </button>
                </div>
            </div>
        </>
    )
}
