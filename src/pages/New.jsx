import { useTranslation } from "react-i18next";

import Hero from '../components/Hero/Hero'

export default function New() {
    const [t] = useTranslation();
  return (
    <div>
        <Hero srcImage={"https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_800,w_800/ljeogdponjdhoyqt0emm.jpg"} header={t("homeHeader")} subtitle={t("homeSubTitle")} />
    </div>
  )
}
