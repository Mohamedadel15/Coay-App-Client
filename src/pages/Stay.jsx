import { useTranslation } from "react-i18next";


import Hero from "../components/Hero/Hero";
import BookCalender from "../components/Booking/BookCalender";
import BookMenuSM from "../components/Booking/BookMenuSM";
import IntroSectionAboutStay from "../components/intro/stay/IntroSectionAboutStay";
import AllRooms from "../components/intro/stay/AllRooms";


export default function Stay() {
    const [t] = useTranslation();
    return (
        <div >
            <Hero srcImage={"https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_1400,w_2400/xuuqaove36g1imavfqh0"} header={t("stay.Header")} subtitle={t("stay.title")} />
            <BookCalender sectionClass="book_Style-home" />
            <BookMenuSM />
            <IntroSectionAboutStay/>
            <AllRooms/>
        </div>
    )
}
