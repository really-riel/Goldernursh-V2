import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { mealSliderImages } from "../utils/data";

const MealSlider = () => {
  return (
    <Swiper
      className="z-0 m-0"
      loop={true}
      autoplay={{
        delay: 5000,
      }}
      modules={[]}
    >
      {mealSliderImages?.map((img, index) => (
        <SwiperSlide className="z-0 m-0" key={index}>
          <img
            className="w-full h-[25rem] object-cover md:h-[50vh] lg:h-[105vh]"
            src={img}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MealSlider;
