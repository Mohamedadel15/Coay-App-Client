import { memo} from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getRooms } from "../../../utils/api";

import CardDetails from '../../cards/cardDetails'


 function DescoverAll() {
    const navigate = useNavigate()
    const [t] = useTranslation()
    const loaderData = useLoaderData()
    return (
        <section className=" container mx-auto mt-12">
            <header className='element-between flex-col md:flex-row gap-5 md:gap-0'>
                <div>
                    <p className='text-[15px] font-mono'>{t("DiscoverAll.Header1")}</p>
                    <h1 className='text-[35px] font-mono'>{t("DiscoverAll.Header2")}</h1>
                </div>
                <button
                    onClick={() => {
                        navigate(`/stay`)

                    }}
                    className='text-white dark:text-BgDark text-[16px] bg-primary_Color py-3 px-6'>
                    {t("DiscoverAll.Button")}
                </button>
            </header>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                {
                    loaderData.slice(0, 3).map((room) => {
                        return <CardDetails key={room.id} room={room} />
                    })
                }

            </div>

        </section>
    )
}

export default memo(DescoverAll)


// to fetch data in server side
export function loader() {
    return getRooms();
}