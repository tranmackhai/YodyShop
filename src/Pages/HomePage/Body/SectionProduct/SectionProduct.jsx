import React, { useEffect, useState } from "react";
import "./_sectionproduct.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import Product from "../../../../Components/Product/Product";
import logo_everyday from "../../../../Assets/Banner/banner_hangngay_1.webp"
import right_icon from "../../../../Assets/Icon/right_color.svg"

const SectionProduct = () => {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(14);
  useEffect(() => {
    fetch("https://tranmackhai.github.io/api-yody/db.json", {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProducts(data.data);
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
          <Link to="">
            <img
              src={logo_everyday}
              alt=""
            />
          </Link>
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
                    <Product item={product} showOption = {true} />
                  </SwiperSlide>
                );
              })}
              <SwiperSlide className="swiper-slide">
                <Link className="swiper-end" to="/bts-xuan-he">Xem tất cả
                <img src={right_icon} alt="" /></Link>
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
