import { useLoaderData } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getRoom } from '../utils/api';

import Hero from '../components/Hero/Hero';
import AboutRoom from '../components/intro/room/AboutRoom';
import BookCalender from '../components/Booking/BookCalender';

const IMAGE_URL_BATH  = import.meta.env.VITE_API_IMAGE_URL

export default function RoomDetails() {
    const loaderData = useLoaderData()
    const [t] = useTranslation()
    return (
        <>
            <Hero srcImage={IMAGE_URL_BATH+loaderData.attributes.image.data.attributes.url} header="" subtitle="" />
            <section className='container mx-auto mt-10'>
                <main className='grid grid-cols-1 lg:grid-cols-3 py-8 gap-1 md:gap-10'>
                    <div className='col-span-2 px-3'>
                        <AboutRoom data={loaderData} />
                    </div>
                    <div
                        id='main'
                        className='flex flex-col h-fit shadow-2xl rounded-[10px] bg-white dark:bg-second_color'>
                        <header className='px-10 pb-5 pt-[40px] element-between w-full '>
                            <p className='text-[25px] font-bold '>
                                {
                                    t("RoomDetails.RESERVE")
                                }
                            </p>
                            <p>
                                {
                                    `${t("RoomDetails.From")}  ${loaderData.attributes.price}$ /${t("RoomDetails.night")}`
                                }

                            </p>
                        </header>
                        <div className='w-full p-1 md:p-3'>
                            <BookCalender sectionClass="book_Style-Room" />
                        </div>
                    </div>

                </main>
            </section>
        </>
    )
}

export function loader({ params }) {
    return getRoom(params.id)
}


