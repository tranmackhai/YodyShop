import React, { useEffect, useState } from "react";
import "./_sectionproduct.scss";
import ProductContent from "../ProductContent/ProductContent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const SectionProduct = () => {
  const [products, setProducts] = useState([]);
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
          {/* <div className="row" style={{ margin: 0 }}> */}
            <>
              <Swiper
                navigation={true}
                spaceBetween={20}
                slidesPerView={6}
                modules={[Navigation]}
                className="mySwiper"
              >
                {products?.map((product) => {
                  return (
                    <SwiperSlide key={product.id}>
                     
                    <ProductContent product = {product}/>
                      
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </>
          {/* </div> */}
        </div>
        <a className="more" href="">
          Xem tất cả 108 sản phẩm
        </a>
      </div>
    </section>
  );
};

export default SectionProduct;
