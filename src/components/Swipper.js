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
import { products } from "@utils/constants";
import { icons } from '@utils/icons';

const Swipper = () => {
  const [slide, setSlide] = useState(1);
  const slides = [];

  return (
    <div className="h-full py-6 relative  flex justify-center">
   
   <div className="review-swiper-button-prev w-10 h-10 center cursor-pointer   rounded-full gradient-pink absolute top-1/2 -translate-y-1/2 z-[40] left-[-54px]">
   
   <div className=" absolute inset-[1.5px] center text-[20px] bg-white  rounded-full"> <span className="text-[20px] text-gradient-pink">{icons.bsprev}</span></div>
 </div>
 <div className="review-swiper-button-next w-10 h-10 cursor-pointer  rounded-full gradient-pink absolute top-1/2 -translate-y-1/2 z-[40] right-[-54px]">
  <div className=" absolute inset-[1.5px] center text-[20px] bg-white  rounded-full"> <span className="text-[20px] text-gradient-pink">{icons.bsnext}</span></div>
 </div>
  
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
    loop={true}
    loopFillGroupWithBlank={true}
    grabCursor={false}
    navigation={{
      nextEl: ".review-swiper-button-next",
      prevEl: ".review-swiper-button-prev",
    }}
    modules={[Pagination, Navigation]}
    className=""
    onSlideChange={(swiper) => {
      // setSlide(swiper.activeIndex);
    }}
  >
    {
      products.map((item,index)=>(

        <SwiperSlide key={index}>
          <div onClick={()=>setSlide(index)} className={`relative w-[191px] h-[252px]  rounded-[22px]  ${slide===index? `gradient-pink`:`bg-white`}`}>
              <div className="absolute inset-[2px] flex justify-center cursor-pointer rounded-[20px] p-[2px] bg-white">
                <img className="w-[183px] h-[244px] rounded-[20px] object-cover brightness-75" src={item.imgpath} alt="" />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-semibold w-full text-center">{item.productname}</span>

              </div>
          </div>
        </SwiperSlide>
      ))
    }
    
   
  </Swiper>
</div>
  );
};

export default Swipper;
