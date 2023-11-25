import { useTranslation } from "react-i18next";

import Hero from '../components/Hero/Hero'

export default function Pages() {
  const [t] = useTranslation();
  return (
    <div className="max-w-full overflow-hidden">
      <Hero srcImage={"https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_800,w_800/ljeogdponjdhoyqt0emm.jpg"} header={t("homeHeader")} subtitle={t("homeSubTitle")} />
    </div>
  )
}
