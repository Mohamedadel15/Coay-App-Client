import { useTranslation } from "react-i18next"

import { FaShippingFast } from 'react-icons/fa';
import { MdOutlineCleanHands } from 'react-icons/md';
import { TbAd2 } from 'react-icons/tb';
import { HiOutlineWifi } from 'react-icons/hi';
import { GiHotMeal } from 'react-icons/gi';
import { FaSwimmer } from 'react-icons/fa';
export default function HomeServices() {
    const [t] = useTranslation()
    const Data = [
        {
            id: 1,
            img:<FaShippingFast/>,
            title:t("HomeServices.categories.Header1"),
        },
        {
            id: 2,
            img:<MdOutlineCleanHands/>,
            title:t("HomeServices.categories.Header2")
        },
        {
            id: 3,
            img:<HiOutlineWifi/>,
            title:t("HomeServices.categories.Header3")
        },
        {
            id: 4,
            img:<TbAd2/>,
            title:t("HomeServices.categories.Header4")
        },
        {
            id: 5,
            img:<FaSwimmer/>,
            title:t("HomeServices.categories.Header5")
        },
        {
            id: 6,
            img:<GiHotMeal/>,
            title:t("HomeServices.categories.Header6")
        }
    ]
  return (Data)
}
