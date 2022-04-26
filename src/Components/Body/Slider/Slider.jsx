import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./_slider.scss";

const Slider = () => {
  const srcImg = [
    "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/slider_1.jpg?1650597781514",
    "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/slider_2.jpg?1650597781514",
    "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/slider_3.jpg?1650597781514",
    "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/slider_4.jpg?1650597781514",
    "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/slider_5.jpg?1650597781514",
  ];
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
      >
        {srcImg.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <a href="">
                <img className="w-100" src={img} alt="" />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default Slider;
