
import { useTranslation } from 'react-i18next'

export  function StayToggleData() {
    const [t] = useTranslation()
    const Data = [
        {
            id: 1,
            Path:"stay/rooms",
            title:t("stayToogle.Header1")
        },
        {
            id: 2,
            Path:"stay/cart",
            title:t("stayToogle.Header2")
        },
        {
            id: 3,
            Path:"stay/checkOut",
            title:t("stayToogle.Header3")
        },
        {
            id: 4,
            Path:"stay/reservations",
            title:t("stayToogle.Header4")
        }
    ]
  return {Data}
}

export  function PagesToggleData() {
    const [t] = useTranslation()
    const pagesData = [
        {
            id: 1,
            Path:"pages/rooms",
            title:t("PagesTogle.Header1")
        },
        {
            id: 2,
            Path:"pages/cart",
            title:t("PagesTogle.Header2")
        },
        {
            id: 3,
            Path:"pages/checkOut",
            title:t("PagesTogle.Header3")
        },
        {
            id: 4,
            Path:"pages/myAccount",
            title:t("PagesTogle.Header4")
        },
        {
            id: 5,
            Path:"pages/rooms",
            title:t("PagesTogle.Header5")
        },
        {
            id: 6,
            Path:"pages/cart",
            title:t("PagesTogle.Header6")
        },
        {
            id: 7,
            Path:"pages/checkOut",
            title:t("PagesTogle.Header7")
        },
        {
            id: 8,
            Path:"pages/myAccount",
            title:t("PagesTogle.Header8")
        },
        {
            id: 9,
            Path:"pages/myAccount",
            title:t("PagesTogle.Header9")
        }
    ]
  return {pagesData}
}


export function AllLinksData(){
    const [t] = useTranslation()
    const allLinks = [
        {
            id: 15,
            Path:"/",
            title:t("Header1")
        },
        {
            id: 16,
            Path:"stay",
            title:t("Header2")
        },
        {
            id: 17,
            Path:"pages",
            title:t("Header3")
        },
        {
            id: 18,
            Path:"new",
            title:t("Header4")
        },
        {
            id: 1,
            Path:"stay/rooms",
            title:t("stayToogle.Header1")
        },
        {
            id: 2,
            Path:"stay/cart",
            title:t("stayToogle.Header2")
        },
        {
            id: 3,
            Path:"stay/checkOut",
            title:t("stayToogle.Header3")
        },
        {
            id: 4,
            Path:"stay/myAccount",
            title:t("stayToogle.Header4")
        },
        {
            id: 10,
            Path:"pages/rooms",
            title:t("PagesTogle.Header1")
        },
        {
            id: 11,
            Path:"pages/cart",
            title:t("PagesTogle.Header2")
        },
        {
            id: 12,
            Path:"pages/checkOut",
            title:t("PagesTogle.Header3")
        },
        {
            id: 13,
            Path:"pages/myAccount",
            title:t("PagesTogle.Header4")
        },
        {
            id: 14,
            Path:"pages/rooms",
            title:t("PagesTogle.Header5")
        },
        {
            id: 6,
            Path:"pages/cart",
            title:t("PagesTogle.Header6")
        },
        {
            id: 7,
            Path:"pages/checkOut",
            title:t("PagesTogle.Header7")
        },
        {
            id: 8,
            Path:"pages/myAccount",
            title:t("PagesTogle.Header8")
        },
        {
            id: 9,
            Path:"pages/myAccount",
            title:t("PagesTogle.Header9")
        }
        
    ]
    return {allLinks}

}


export const homeImageSlider = [
    {
        id: 1,
        src:"https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_800,w_800/kg35zz6lpoaoux4kcntt.jpg"
    },
    {
        id: 2,
        src:"https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_800,w_800/obwnixozgktihguojvyi.jpg"
    },
    {
        id: 3,
        src:"https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_800,w_800/tfvo8vazuqi6xma9pyb9.jpg"
    },
    {
        id: 4,
        src:"https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_800,w_800/utd8ip3f9j1nxbq2r70c.jpg"
    }
]

