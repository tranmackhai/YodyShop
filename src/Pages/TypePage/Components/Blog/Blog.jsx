import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  return (
    <div className="blog">
      <div className="blog-title buy-by">
        <h3>Tin nổi bật</h3>
      </div>
      <div className="container">
        <div className="list-blog">
          <>
            <Swiper
              breakpoints={{
                360: {
                  width: 375,
                  slidesPerView: 2,
                },
                480: {
                  width: 480,
                  slidesPerView: 2,
                },
                768: {
                  width: 768,
                  slidesPerView: 3,
                },
                1024: {
                  width: 1224,
                  slidesPerView: 3,
                },
                1224: {
                  width: 1224,
                  slidesPerView: 5,
                },
              }}
              navigation={true}
              spaceBetween={20}
              slidesPerView={5}
              modules={[Navigation]}
              className="mySwiper"
            >
              {blog.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="blog-image">
                      <a href="">
                        <img src={item.image} alt="" />
                      </a>
                    </div>
                    <div className="box-infor">
                      <div className="blog-title">
                        <a href="">{item.title}</a>
                      </div>
                      <div className="blog-description">{item.description}</div>
                      <div className="blog-time">
                        <span>
                          <i className={item.icon}></i>
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        </div>
        <Link to = "" className="more">
              Xem thêm
        </Link>
      </div>
    </div>
  );
};

export default Blog;
