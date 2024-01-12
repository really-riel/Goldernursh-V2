import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import { mealSliderImages } from "../utils/data";
import "swiper/css/effect-fade";

const MealSlider = () => {
  return (
    <Swiper
      className="z-0 m-0"
      loop={true}
      autoplay={{
        delay: 5000,
        waitForTransition: false,
      }}
      effect="fade"
      modules={[Autoplay, EffectFade]}
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
