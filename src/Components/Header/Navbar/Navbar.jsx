import React from "react";
import "./_navbar.scss";
import NavMenuDrop from "../NavMenuDrop/NavMenuDrop";
import { Link } from "react-router-dom";

const list = [
  {
    name: "xuân hè 2022",
  },
  {
    name: "nữ",
    list: [
      {
        title: "ÁO",
        items: [
          { title: "Áo Polo Nữ" },
          { title: "Áo Sơ Mi Nữ" },
          { title: "Áo Thun Nữ" },
          { title: "Áo Khoác Nữ" },
        ],
      },
      {
        title: "QUẦN",
        items: [
          { title: "Quần Jean Nữ " },
          { title: "Quần âu nữ" },
          { title: "quần kaki nữ" },
          { title: "quần short Nữ" },
        ],
      },
      {
        title: "VÁY NỮ",
        items: [
          { title: "Áo Polo Nữ" },
          { title: "Áo Sơ Mi Nữ" },
          { title: "Áo Thun Nữ" },
          { title: "Áo Khoác Nữ" },
        ],
      },
      {
        title: "BỘ ĐỒ NỮ",
        items: [
          { title: "Áo Polo Nữ" },
          { title: "Áo Sơ Mi Nữ" },
          { title: "Áo Thun Nữ" },
          { title: "Áo Khoác Nữ" },
        ],
      },
      {
        title: "YODY SPORT",
        items: [{}],
      },
      {
        title: "PHỤ KIỆN",
        items: [
          { title: "Áo Polo Nữ" },
          { title: "Áo Sơ Mi Nữ" },
          { title: "Áo Thun Nữ" },
          { title: "Áo Khoác Nữ" },
        ],
      },
      {
        title: "ĐỒ MẶC TRONG",
        items: [
          { title: "Áo Polo Nữ" },
          { title: "Áo Sơ Mi Nữ" },
          { title: "Áo Thun Nữ" },
          { title: "Áo Khoác Nữ" },
        ],
      },
    ],
    imgright:
      "https://bizweb.sapocdn.net/thumb/grande/100/438/408/themes/858544/assets/link_image_2_1.jpg?1650423295558",
  },
  {
    name: "nam",
    list: [
      {
        title: "ÁO",
        items: [
          { title: "Áo Thun" },
          { title: "Áo Polo Nam" },
          { title: "Áo Sơ Mi Nam" },
          { title: "Áo Ba Lỗ" },
          { title: "Áo Khoác Nam" },
          { title: "Áo Vest Nam" },
        ],
      },
      {
        title: "QUẦN",
        items: [
          { title: "Quần Jean Nam" },
          { title: "Quần Tây Nam" },
          { title: "Quần Kaki Nam" },
          { title: "Quần Short" },
        ],
      },
      {
        title: "Đồ mặc trong",
        items: [{ title: "Đồ Lót" }],
      },
      {
        title: "YODY SPORT",
        items: [{}],
      },
      {
        title: "PHỤ KIỆN",
        items: [
          { title: "Ví nam" },
          { title: "Thắt lưng nam" },
          { title: "Giày nam" },
          { title: "Mũ Nam" },
          { title: "Phụ Kiện Khác" },
        ],
      },
    ],
    imgleft:
      "https://bizweb.sapocdn.net/thumb/grande/100/438/408/themes/858544/assets/link_image_3_1.jpg?1650423295558",
    imgright:
      "https://bizweb.sapocdn.net/thumb/grande/100/438/408/themes/858544/assets/link_image_3_2.jpg?1650423295558",
  },
  {
    name: "trẻ em",
    list: [
      {
        title: "ÁO",
        items: [
          { title: "Áo Thun" },
          { title: "Áo polo" },
          { title: "Áo khoác" },
          { title: "Áo sơ mi" },
        ],
      },
      {
        title: "QUẦN",
        items: [{ title: "Quần dài" }, { title: "Quần short" }],
      },
      {
        title: "BỘ ĐỒ TRẺ EM",
        items: [{}],
      },
      {
        title: "VÁY ĐẦM TRẺ EM",
        items: [{ title: "Chân Váy" }, { title: "Váy trẻ em" }],
      },
      {
        title: "PHỤ KIỆN",
        items: [{ title: "Phụ kiện khác" }],
      },
    ],
    imgleft:
      "https://bizweb.sapocdn.net/thumb/grande/100/438/408/themes/858544/assets/link_image_4_1.jpg?1650423295558",
    imgright:
      "https://bizweb.sapocdn.net/thumb/grande/100/438/408/themes/858544/assets/link_image_4_2.jpg?1650423295558",
  },
  {
    name: "polo yody",
  },
  {
    name: "bộ sưu tập",
  },
  {
    name: "yody love",
    list: [
      {
        title: "TIN TỨC",
        items: [
          { title: "Yody news" },
          { title: "Trải nghiệm khách hàng" },
          { title: "Showroom Yody" },
          { title: "Văn hóa Yody" },
          { title: "Bạn đọc quan tâm" },
        ],
      },
      {
        title: "PHONG CÁCH THỜI TRANG",
        items: [
          { title: "Mix and match " },
          { title: "Mẹo hay" },
          { title: "Xu hướng thời trang" },
          { title: "Phong thủy" },
        ],
      },
      {
        title: "STORIES",
        items: [{ title: "Nhân vật" }, { title: "Theo dòng thời trang" }],
      },
      {
        title: "CHẤT LIỆU VÀ SẢN PHẨM",
        items: [{ title: "Chất liệu" }, { title: "Sản phẩm" }],
      },
      {
        title: "ƯU ĐÃI",
        items: [
          { title: "Khuyến mãi" },
          { title: "Dịch vụ" },
          { title: "Chính sách" },
        ],
      },
    ],
    imgright:
      "https://bizweb.sapocdn.net/thumb/grande/100/438/408/themes/858544/assets/link_image_7_1.jpg?1650597781514",
  },
  {
    name: "đồng phục",
  },
];

const Navbar = () => {
  return (
    <div className="container">
      <div className="nav-bar">
        <a className="logo" href="/">
          <img src="	https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/logo.svg?1650423295558" />
        </a>
        <ul className="nav-list">
          {list.map((item) => {
            return (
              <li className="nav-item" key={item.name}>
                <a className="item-href" href="#">
                  {item.name}
                </a>
                {item.list && (
                  <NavMenuDrop
                    list={item.list}
                    imgleft={item.imgleft}
                    imgright={item.imgright}
                  />
                )}
              </li>
            );
          })}
        </ul>
        <div className="search">
          <input
            className="search-box"
            type={"text"}
            placeholder="Tìm sản phấm"
          />
          <button className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="header-tool">
          <div className="user">
            <Link to="/login">
              <img
                src="https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/user.svg?1650423295558"
                alt=""
              />
            </Link>
            <ul className="account-header">
              <li>
                <Link to="/register">Đăng ký</Link>
              </li>
              <li>
                <Link to="/login">Đăng nhập</Link>
              </li>
            </ul>
          </div>
          <div className="like">
            <a href="">
              <img
                src="https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/heart.svg?1650423295558"
                alt=""
              />
            </a>
          </div>
          <div className="cart">
            <Link to="/cart">
              <img
                src="https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/cart.svg?1650423295558"
                alt=""
              />
            </Link>
            <div className="cart-drop">
              <div className="cart-container">
                <div className="message">
                  <img
                    src="https://bizweb.dktcdn.net/100/438/408/themes/858544/assets/blank_cart.svg?1650243498580"
                    alt=""
                  />
                  <p>Giỏ hàng của bạn trống</p>
                  <a href="" className="cart-login">
                    Đăng nhập/Đăng ký
                  </a>
                  <span className="clear-fix"></span>
                  <a href="" className="buy-now">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
