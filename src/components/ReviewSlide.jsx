import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {} from "swiper";

import ReviewCard from "./ReviewCard";
import { useState } from "react";
import { useRef } from "react";

const ReviewSlide = ({ customerReview }) => {
  const [init, setInit] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="reviewSlideContainer  w-full grid grid-cols-[10%_80%_10%] cursor-pointer  ">
      <div
        className="sliderBtnLeft grid place-content-center w-full h-[277px]"
        ref={prevRef}
      >
        <IoIosArrowDropleft className="text-[clamp(1.5rem,_1rem_+_1vw,_4rem);]" />
      </div>
      <div className="w-full reviewSlide">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            375: {
              slidesPerView: 1.3,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[]}
          onInit={() => setInit(true)}
          className="swiper"
        >
          {customerReview?.map((data, index) => (
            <SwiperSlide key={index} className="h-full p-4 reviewCardContainer">
              <ReviewCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className="sliderBtnRight grid place-content-center w-full h-[277px]"
        ref={nextRef}
      >
        <IoIosArrowDropright className="text-[clamp(1.5rem,_1rem_+_1vw,_4rem)] cursor-pointer" />
      </div>
    </div>
  );
};

export default ReviewSlide;
