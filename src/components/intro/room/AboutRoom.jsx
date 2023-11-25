import { useContext, useRef } from "react"
import { useTranslation } from "react-i18next";

import dark_LanguageContext from '../../../store/UseDarkAndLangContext'
import CalenderStyleTwo from "../../Booking/CalenderStyleTwo";

import { LiaBathSolid } from 'react-icons/lia';
import { PiArrowsInSimpleThin } from 'react-icons/pi';
import { BsPersonAdd } from 'react-icons/bs';
import { LiaBedSolid } from 'react-icons/lia';
import { GiWashingMachine } from 'react-icons/gi';
import { FaSwimmer } from 'react-icons/fa';
import { GiBunkBeds } from 'react-icons/gi';
import { TbAirConditioning } from 'react-icons/tb';
import { PiDevicesBold } from 'react-icons/pi';
import { SlFeed } from "react-icons/sl";
import { GiTowel } from 'react-icons/gi';
import { GiSlippers } from 'react-icons/gi';
import { SiCloudfoundry } from 'react-icons/si';
import { GiShamblingMound } from 'react-icons/gi';
import { MdCoffeeMaker } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { FaCocktail } from 'react-icons/fa';
import { FaPaw } from 'react-icons/fa';
import { BiFridge } from 'react-icons/bi';
import { GoDotFill } from 'react-icons/go';




export default function AboutRoom({ data }) {
    const { lang } = useContext(dark_LanguageContext)
    const [t] = useTranslation()
    const familyIcons = [{
        id: 1,
        icon: <FaSwimmer />,
        title: t("RoomDetails.Family.Swimming"),
    },
    {
        id: 2,
        icon: <GiBunkBeds />,
        title: t("RoomDetails.Family.bathRoom"),
    },
    {
        id: 3,
        icon: <GiWashingMachine />,
        title: t("RoomDetails.Family.WishingMachine"),
    }]
    const AmenitiesIcons = [{
        id: 1,
        icon: <TbAirConditioning />,
        title: t("RoomDetails.RoomAmenities.Air"),
    },
    {
        id: 2,
        icon: <PiDevicesBold />,
        title: t("RoomDetails.RoomAmenities.Caplet"),
    },
    {
        id: 3,
        icon: <SlFeed />,
        title: t("RoomDetails.RoomAmenities.Wifi"),
    },
    {
        id: 4,
        icon: <GiTowel />,
        title: t("RoomDetails.RoomAmenities.Towels"),
    },
    {
        id: 5,
        icon: <GiSlippers />,
        title: t("RoomDetails.RoomAmenities.Slippers"),
    },
    {
        id: 6,
        icon: <SiCloudfoundry />,
        title: t("RoomDetails.RoomAmenities.Hair"),
    },
    {
        id: 7,
        icon: <GiShamblingMound />,
        title: t("RoomDetails.RoomAmenities.Shampoo"),
    },
    {
        id: 8,
        icon: <MdCoffeeMaker />,
        title: t("RoomDetails.RoomAmenities.Espresso"),
    },
    {
        id: 9,
        icon: <FaLock />,
        title: t("RoomDetails.RoomAmenities.SafeBox"),
    },
    {
        id: 10,
        icon: <FaCocktail />,
        title: t("RoomDetails.RoomAmenities.Drinks"),
    },
    {
        id: 11,
        icon: <FaPaw />,
        title: t("RoomDetails.RoomAmenities.petFriendly"),
    },
    {
        id: 12,
        icon: <BiFridge />,
        title: t("RoomDetails.RoomAmenities.Refrigerator"),
    },






    ]

    return (
        <section >
            <main>
                <h1 className="text-[30px] ">
                    {
                        lang === "ar" ? data.attributes.arTitle : data.attributes.title
                    }
                </h1>
                <p className="opacity-70 py-3 text-[16px] my-3 ">
                    {
                        lang === "ar" ? data.attributes.arPrivateDecs : data.attributes.privateDesc
                    }
                </p>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 md:gap-1 '>
                    <div className='element-center gap-1'>
                        <PiArrowsInSimpleThin className='border border-[2px] text-[20px] ' />
                        <p className='text-[14px] opacity-80'>{data.attributes.placement} {t("Rooms.m2")}</p>
                    </div>
                    <div className='element-center gap-1'>
                        <BsPersonAdd className='text-[20px] ' />
                        <p className='text-[14px] opacity-80'>{data.attributes.guest} {t("Rooms.Guest")}</p>
                    </div>
                    <div className='element-center gap-1'>
                        <LiaBedSolid className='text-[20px] ' />
                        <p className='text-[14px] opacity-80'>{data.attributes.beds}  {t("Rooms.Beds")}</p>
                    </div>
                    <div className='element-center gap-1'>
                        <LiaBathSolid className='text-[20px] ' />
                        <p className='text-[14px] opacity-80'>{data.attributes.bathRoom}  {t("Rooms.bathRoom")}</p>
                    </div>
                </div>
                <p className=" py-3 text-[16px] my-3 ">
                    {t("RoomDetails.Description2")}
                </p>
                <p className=" py-3 text-[16px] my-3 ">
                    {
                        lang === "ar" ? data.attributes.arDescription : data.attributes.description
                    }
                </p>



            </main>
            <main className="my-8">
                <h2 className="tracking-wide text-[23px]">{t("RoomDetails.Family.FamilyTitle")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
                    {
                        familyIcons.map(item => (
                            <div key={item.id} className="element-center dark:bg-[#3c35359d] gap-4 bg-[#FAF7F4] py-7">
                                <div className="text-[40px] font-light text-primary_Color">{item.icon}</div>
                                <p className="text-[18px]">{item.title}</p>
                            </div>

                        ))
                    }
                </div>
            </main>
            <main className="mt-[50px]">
                <h2 className="tracking-wide text-[23px]">{t("RoomDetails.RoomAmenities.title")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 dark:md:gap-4 my-8">
                    {
                        AmenitiesIcons.map(item => (
                            <div key={item.id} className="flex items-center  gap-3 py-4 dark:bg-black px-4">
                                <div className="text-[30px] opacity-80 font-light text-primary_Color">{item.icon}</div>
                                <p className="text-[17px] font-mono">{item.title}</p>
                            </div>

                        ))
                    }
                </div>

            </main>
            <main className="py-4 pb-8 border-b-[1px] border-b-[#ccc] w-full">
                <h2 className="tracking-wide text-[23px]">{t("RoomDetails.suite.title")}</h2>
                <div className="mt-[25px] px-2">
                    {
                        Array.from({ length: 9 }, (_, i) => (
                            <p className="flex items-center gap-3 mb-[15px]" key={i}><GoDotFill className="text-primary_Color text-[12px]" /> {t(`RoomDetails.suite.${`Header${i + 1}`}`)}</p>
                        ))
                    }
                </div>


            </main>
        <main className="mt-[50px]">
                <CalenderStyleTwo/>

            </main>

        </section>
    )
}
