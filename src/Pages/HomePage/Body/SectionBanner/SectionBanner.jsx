import React from "react";
import "./_sectionbanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import banner_1 from "../../../../Assets/Banner/b1.webp";
import banner_2 from "../../../../Assets/Banner/b2.webp";
import banner_3 from "../../../../Assets/Banner/b3.webp";
import banner_4 from "../../../../Assets/Banner/b5.webp";

const SectionBanner = () => {
  return (
    <section className="section-banner">
      <div className="container">
        <div className="content-title">
          <h2>#YODY</h2>
        </div>
        <div className="img-effect">
          <a href="">
            <img
              src={banner_1}
              alt=""
            />
          </a>
        </div>
        <div className="img-effect">
          <a href="">
            <img
              src={banner_2}
              alt=""
            />
          </a>
        </div>
        <div className="image-swiper">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay ={{ delay: 4000 }}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="img-effect">
                <a href="#">
                  <img
                    src={banner_3}
                    alt=""
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-effect">
                <a href="#">
                  <img
                    src= {banner_4}
                    alt=""
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SectionBanner;
