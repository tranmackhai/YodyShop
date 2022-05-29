import React from "react";
import "./_sectionbanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
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
              src="https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/b1.jpg?1650705926266"
              alt=""
            />
          </a>
        </div>
        <div className="img-effect">
          <a href="">
            <img
              src="https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/b2.jpg?1650705926266"
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
                    src="https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/b3.jpg?1650705926266"
                    alt=""
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-effect">
                <a href="#">
                  <img
                    src="https://bizweb.sapocdn.net/100/438/408/themes/862083/assets/b5.jpg?1653109115901"
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
