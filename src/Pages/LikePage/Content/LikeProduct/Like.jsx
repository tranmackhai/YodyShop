import React, { useState } from "react";
import "./_like.scss";
import data from "../../../../data.json";
import { Link } from "react-router-dom";
import no_like from "../../../../Assets/Avatar/no-heart.webp";
import Product from "../../../../Components/Product/Product";

const Like = () => {
  const [visible, setVisible] = useState(16);
  const loadmore = () => {
    setVisible((prev) => {
      if (prev >= data.length) {
        prev = 16;
      } else if (prev >= 16) {
        prev = prev + 8;
      }
      return prev;
    });
  };
  return (
    <div className="block-content col-lg-9">
      <div className="separation-block-like">
        <div className="header-content">
          <span className="first-title">Sản phẩm yêu thích</span>
          <span className="last-title">Sản phẩm</span>
        </div>
        <div className="body-content">
          <img src={no_like} alt="" />
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
            return (
              <div
                className="item-product col-lg-3"
                style={{ paddingRight: "5px" }}
                key={item.id}
              >
                <Product item={item} />
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
          {visible < data.length ? "Xem thêm" : "Thu gọn"}
        </Link>
      </div>
    </div>
  );
};

export default Like;
