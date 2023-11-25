import { useContext, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import dark_LanguageContext from '../../store/UseDarkAndLangContext';
import ConfirmBooking from '../../store/ConfirmBokingContext';

export default function CalenderStyleTwo(ref) {
    const { dispatch } = useContext(ConfirmBooking)
    const { lang } = useContext(dark_LanguageContext)
    // To Change the Date
    const [newState, setNewState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: 'selection'
        }
    ]);
    return (
        <>
            <div className='flex flex-col' >
                <div dir="ltr" className='  px-3 md:px-0'  >
                    <DateRangePicker
                        onChange={item => setNewState([item.selection])}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={newState}
                        direction="horizontal"
                        rangeColors={["#b99d75"]}
                        color={"#fff"}
                className={`text-second_color flex ${lang === "ar" ? "justify-end" : "justify-start"}  w-full`}

                    />
                    <div
                        dir={lang === "ar" ? 'rtl' : "ltr"}
                        className='flex items-center flex-col md:flex-row  gap-[20px] mt-[40px] max-w-[100%] '>
                        <div className=' flex gap-3'>
                            <button
                                className="text-[#fff] dark:text-primary_Color dark:bg-second_color py-1 text-[15px]  bg-black px-6"
                                onClick={() => {

                                    document.getElementById("main").scrollIntoView()
                                    dispatch({ type: "BookingCheckOut", value: newState[0].endDate })
                                    dispatch({ type: "BookingCheckIn", value: newState[0].startDate })
                                }}>
                                {lang === "ar" ? 'تطبيق' : "Apply"}
                            </button>
                            <button className="text-black dark:text-[#fff] py-1 px-6 border-2 text-[15px]"
                            >
                                {lang === "ar" ? 'الغاء' : "Cancel"}
                            </button>
                        </div>
                        <article className='flex gap-3 '>
                            <p className='text-[12px] '>{newState[0].startDate.toLocaleDateString()}</p>
                            <p className='text-[12px] '>{newState[0].endDate.toLocaleDateString()}</p>
                        </article>

                    </div>
                </div>


            </div>
        </>
    )
}
