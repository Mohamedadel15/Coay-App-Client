import { useTranslation } from "react-i18next";
import HomeSlider from "../components/Sliders/HomeSlider";

import Hero from '../components/Hero/Hero'
import HomeIntro from "../components/intro/home/HomeIntro";
import DescoverAll from "../components/intro/home/DescoverAll";
import Experience from "../components/intro/home/Experience";
import TextBgImage from "../layouts/TextBgImage";
import Services from "../components/intro/home/Services";
import BookCalender from "../components/Booking/BookCalender";
import Gallery from "../components/cards/Gallery";
import BookMenuSM from "../components/Booking/BookMenuSM";


export default function Home() {
  const [t] = useTranslation();

  return (
    <div className="max-w-full overflow-hidden">

      <Hero srcImage={"https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_800,w_800/ljeogdponjdhoyqt0emm.jpg"} header={t("homeHeader")} subtitle={t("homeSubTitle")} />
      <BookCalender sectionClass="book_Style-home" />
      <BookMenuSM/>
      <HomeIntro />
      <HomeSlider />
      <DescoverAll />
      <Experience />
      <Gallery/>
      <TextBgImage />
      <Services />

    </div>
  )
}

