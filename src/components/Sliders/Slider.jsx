import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider({images , SwiperClass = "" , SwiperSlideClass = ""}) {
  return (
    <Swiper
    modules={[Navigation, Pagination]}
    navigation
    className={`relative z-20 ${SwiperClass} `}
    spaceBetween={10}
    slidesPerView={1}
    breakpoints={{
      500: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      }
    }}
  >
    {
      images.map((image) => {
        return (
        <SwiperSlide key={image.id}><img src={image.src} className={SwiperSlideClass} /></SwiperSlide>
        )
      })
    }
  </Swiper>
  )
}
