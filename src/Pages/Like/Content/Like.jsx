import React, { useState } from "react";
import "./_like.scss";
import "../../../Components/Body/ProductContent/_productcontent.scss";
import { castToVND } from "../../../Utils";
import data from "../../../data.json";
import { Link } from "react-router-dom";

const Like = () => {
  const [visible, setVisible] = useState(16);
  const loadmore = () => {
    setVisible((prev) => prev + 4);
  };
  const showImages = (images) => {
    const arr = [];
    for (const key in images) {
      arr.push(
        <div key={key} className="view-color">
          <img src={images[key]} alt="" />
        </div>
      );
    }
    return arr;
  };
  return (
    <div className="block-like-content col-lg-9">
    <div className="separation-block-like">
      <div className="header-content">
        <span className="first-title">Sản phẩm yêu thích</span>
        <span className="last-title">Sản phẩm</span>
      </div>
      <div className="body-content">
        <img
          src="https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/no-heart.png"
          alt=""
        />
        <span>Danh sách yêu thích của bạn trống</span>
        <Link className="buy-now" to="#">
          Mua sắm ngay bây giờ
        </Link>
      </div>
    </div>
    <div className="title-like-product">
      <h1>CÓ THỂ BẠN MUỐN MUA</h1>
      <div className="row">
        {data.slice(0, visible).map((item) => {
          console.log(item)
          return (
            <div
              key={item.id}
              className="item-product col-lg-3"
              style={{ paddingRight: "5px" }}
            >
              <a href="">
                <div className="product-image">
                  <img src={item.image} alt="" />
                </div>
                <h3 className="product-name text-align-left">
                  {item.name}
                </h3>
              </a>
              <div className="product-price-box">
                <div className="price">{castToVND(item.price)}</div>
                <div className="price-old">
                  {castToVND(item.priceold)}
                </div>
              </div>
              <div className="option-view">
                <div className="row" style={{marginLeft: "0", marginRight : "0"}}>{showImages(item.images)}</div>
              </div>
            </div>
          );
        })}
      </div>
      <Link
        onClick={() => {
          loadmore();
        }}
        to=""
        className="more"
      >
        Xem thêm sản phẩm
      </Link>
    </div>
  </div>
  );
};

export default Like;
