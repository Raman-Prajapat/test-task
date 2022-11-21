import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Pagination,
  Navigation,

} from "swiper";
import { useState } from "react";
const SwipperProductImage = ({ productImages,setSelectedImage }) => {
  const [slide, setSlide] = useState(0);

  return (
    <div className="">



      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },

          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1700: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
        spaceBetween={16}
        loop={false}
        loopFillGroupWithBlank={true}
        grabCursor={false}
        navigation={{
          nextEl: ".review-swiper-button-next",
          prevEl: ".review-swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="px-1"
        onSlideChange={(swiper) => {
          // setSlide(swiper.activeIndex);
        }}
      >
        {
          productImages.map((image, index) => (

            <SwiperSlide className="py-1" key={index} onClick={()=>setSelectedImage(image)}>
              <div onClick={() => setSlide(index)} className={`w-[82px] h-[82px] relative cursor-pointer  center flex-shrink-0 rounded-md ${slide === index ? `gradient-border` : `bg-white`}`}>
                <div className='  bg-gray-2 center rounded-md'>
                  <img className='max-h-[75px] max-w-[75px]' src={image} alt="" />

                </div>

              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>
    </div>
  );
};

export default SwipperProductImage;
