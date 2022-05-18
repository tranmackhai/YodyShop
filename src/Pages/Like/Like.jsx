import React, { useState } from "react";
import "./_like.scss";
import "../../Components/Body/ProductContent/_productcontent.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { castToVND } from "../../Utils";
import data from "../../data.json";
import { Link } from "react-router-dom";

const Like = () => {
  const list_item = [
    {
      active: false,
      icon: "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/acc_user_1.svg",
      icon_active:
        "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/acc_user_1_hover.svg",
      title: "Tài khoản của tôi",
      link: "/user",
    },
    {
      active: false,
      icon: "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/acc_user_2.svg",
      icon_active:
        "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/acc_user_2_hover.svg",
      title: "Đơn hàng của tôi",
      link: "/user",
    },
    {
      active: false,
      icon: "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/acc_user_3.svg",
      icon_active:
        "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/acc_user_3_hover.svg",
      title: "Đổi mật khẩu",
      link: "/user",
    },
    {
      active: false,
      icon: "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/acc_user_4.svg",
      icon_active:
        "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/acc_user_4_hover.svg",
      title: "Sổ địa chỉ",
      link: "/user",
    },
    {
      active: false,
      icon: "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/acc_user_5.svg",
      icon_active:
        "https://bizweb.dktcdn.net/100/438/408/themes/858544/assets/acc_user_5_hover.svg?1652325127725",
      title: "Đã xem gần đây",
      link: "/recently-viewed",
    },
    {
      active: true,
      icon: "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/acc_user_6.svg",
      icon_active:
        "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/acc_user_6_hover.svg",
      title: "Sản phẩm yêu thích",
      link: "/like",
    },
  ];
  const [visible, setVisible] = useState(16);
  const [active, setActive] = useState(list_item[list_item.length - 1].title);
  const [activeColor, setActiveColor] = useState();
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
    <div className="like-page">
      <Header />
      <div className="header-like-content">
        <div className="top-header-like">
          <Link to="/" className="home">
            Trang chủ
          </Link>
          <span className="separation">/</span>
          <span className="text-like">Yêu thích</span>
        </div>
        <h2 className="title-header">YÊU THÍCH</h2>
        <div className="like-content container">
          <div className="row">
            <div className="block-like-account col-lg-3">
              <div className="info">
                <img
                  src="https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/account_ava.jpg?1652508014603"
                  alt=""
                />
                <div className="account">
                  <Link to="/login" className="user">
                    Đăng nhập
                  </Link>
                  <span className="separation">/</span>
                  <Link to="/register" className="user">
                    Đăng ký
                  </Link>
                </div>
                <Link to="/login" className="goto-user">
                  Trải nghiệm ngay bây giờ
                </Link>
              </div>
              <ul>
                {list_item.map((item, index) => {
                  return (
                    <li
                      onClick={() => {
                        setActive(item.title);
                      }}
                      className={item.title === active ? "active" : ""}
                      key={index}
                    >
                      <Link to={item.link}>
                        <img
                          src={
                            item.title === active ? item.icon_active : item.icon
                          }
                          alt=""
                        />
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Like;
