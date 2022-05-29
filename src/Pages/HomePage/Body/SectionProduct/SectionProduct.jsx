import React, { useEffect, useState } from "react";
import "./_sectionproduct.scss";
import ProductContent from "../ProductContent/ProductContent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

const SectionProduct = () => {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(14);
  useEffect(() => {
    fetch("https://json-server-yodyshop.herokuapp.com/data", {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(products);
  return (
    <section className="section-slider-product">
      <div className="container">
        <div className="content-title">
          <h2>EVERYDAY WEAR</h2>
        </div>
        <div className="section-image">
          <a href="">
            <img
              src="https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/banner_hangngay_1.jpg?1650597781514"
              alt=""
            />
          </a>
        </div>
        <div className="product-content">
          <>
            <Swiper
              breakpoints={{
                360: {
                  width: 375,
                  slidesPerView: 2.4,
                },
                480: {
                  width: 480,
                  slidesPerView: 2.4,
                },
                768: {
                  width: 768,
                  slidesPerView: 4,
                },
                1024: {
                  width: 1224,
                  slidesPerView: 4,
                },
                1224: {
                  width: 1224,
                  slidesPerView: 6,
                },
              }}
              navigation={true}
              spaceBetween={20}
              slidesPerView={6}
              modules={[Navigation]}
              className="mySwiper"
            >
              {products?.slice(0, showProducts).map((product) => {
                return (
                  <SwiperSlide key={product.id}>
                    <ProductContent product={product} />
                  </SwiperSlide>
                );
              })}
              <SwiperSlide className="swiper-slide">
                <Link className="swiper-end" to="/bts-xuan-he">Xem tất cả
                <img src="https://bizweb.sapocdn.net/100/438/408/themes/862083/assets/right_color.svg" alt="" /></Link>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
        <div className="more">Xem tất cả 108 sản phẩm</div>
      </div>
    </section>
  );
};

export default SectionProduct;
