import React, { useState } from "react";
import "./_recentlyviewed.scss";
import "../LikeProduct/_like.scss";
import { Link } from "react-router-dom";
import data from "../../../../data.json";
import no_viewed from "../../../../Assets/Avatar/no-viewed.webp";
import Product from "../../../../Components/Product/Product";

const RecentlyViewed = () => {
  const [visible, setVisible] = useState(16);
  const loadmore = () => {
    setVisible((prev) => prev + 4);
  };
 
  return (
    <div className="block-content col-lg-9">
      <div className="separation-block-like">
        <div className="header-content">
          <span className="first-title">Đã xem gần đây</span>
        </div>
        <div className="body-content">
          <img src={no_viewed} alt="" />
          <span>Bạn chưa xem sản phẩm nào</span>
          <Link className="buy-now" to="#">
            Mua sắm ngay bây giờ
          </Link>
        </div>
      </div>
      <div className="title-like-product">
        <h1>CÓ THỂ BẠN MUỐN MUA</h1>
        <div className="row">
          {data.slice(0, visible).map((item) => {
            console.log(item);
            return (
              <div
                className="item-product col-lg-3"
                key={item.id}
                style={{ paddingRight: "5px" }}
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
          Xem thêm sản phẩm
        </Link>
      </div>
    </div>
  );
};

export default RecentlyViewed;
