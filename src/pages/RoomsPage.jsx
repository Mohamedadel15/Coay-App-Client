import { Suspense, useContext } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


import { getRooms } from '../utils/api';
import ConfirmBooking from '../store/ConfirmBokingContext';


import Hero from '../components/Hero/Hero'
import RoomCards from '../components/cards/RoomCards';
import EmptyCart from '../components/cards/EmptyCart';
import BookCalender from '../components/Booking/BookCalender';


export default function RoomsPage() {
  const [t] = useTranslation();
  const { confirmBookingState } = useContext(ConfirmBooking);
  const loaderData = useLoaderData();
  return (
    <div>
      <Hero srcImage={"https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_1400,w_2400/xk6vtmexmuwfmiyu8qx0"} header={t("RoomDetails.RoomsHeader")} subtitle="" />
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 items-start'>
        <BookCalender sectionClass="book_Style-Room" />
        <section className='col-span-2'>
          <Suspense>
            <Await
              resolve={loaderData.Rooms}
              errorElement={<div>Loading Error Page</div>}>
              {
                (Rooms) => {
                  return (
                    Rooms.filter((room) => {
                      return (room.attributes.children >= confirmBookingState.children && room.attributes.guest >= confirmBookingState.adult && confirmBookingState.room > 0 && confirmBookingState.adult >= 2)
                    }).map((room) => {
                      return <RoomCards key={room.id} room={room} />
                    })
                  )

                }
              }
            </Await>
          </Suspense>
          {
            (confirmBookingState.room <= 0 ||
              confirmBookingState.adult > 12 ||
              confirmBookingState.children > 6 ||
              confirmBookingState.adult < 2) &&
            (
              <EmptyCart
                firstTitle={t("RoomDetails.NothingFound.message1")}
                secondTitle={t("RoomDetails.NothingFound.message2")} />
            )
          }
        </section>
      </div>
    </div>
  )
}

export async function loader() {
  return defer({ Rooms: getRooms() })

}
