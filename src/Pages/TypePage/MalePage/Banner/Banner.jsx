import React from "react";
import Service from "../../../../Pages/HomePage/Body/Service/Service";
import "./_banner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Banner = ({ banner }) => {
  return (
    <div className="banner">
      <div className="top-banner">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          loopFillGroupWithBlank={true}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="img-effect">
              {banner.map((item, index) => {
                return (
                  <Link to="/nu#" key={index}>
                    <img key={index} src={item.img} alt=""/>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Service />
    </div>
  );
};

export default Banner;
