import React, { Suspense, useRef } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom';
import { motion, useInView } from "framer-motion";


import { getRooms } from '../../../utils/api';
import RoomCards from '../../cards/RoomCards';

export default function AllRooms() {
    const loaderData = useLoaderData();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.main
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0.2,
                transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
            }}  >
            <Suspense fallback={<div>Loading...</div>}>
                <Await
                    resolve={loaderData.Rooms}
                    errorElement={<div>Loading Error Page</div>}>
                    {
                        (Rooms) => {
                            return (
                                Rooms.map((room) => {
                                    return <RoomCards key={room.id} room={room} STYLE="stay" />
                                })

                            )


                        }
                    }

                </Await>
            </Suspense>

        </motion.main>
    )
}

export async function loader() {
    return defer({ Rooms: getRooms() })
}

