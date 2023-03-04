import React from "react";
import "./_navbar.scss";
import "../NavMenuDrop/_navmenudrop.scss";
import NavMenuDrop from "../NavMenuDrop/NavMenuDrop";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import usersvg from "../../../Assets/Icon/user.svg";
import cart_icon from "../../../Assets/Icon/cart.svg";
import heart from "../../../Assets/Icon/heart.svg";
import img_nu from "../../../Assets/Img/link_image_2_1.webp";
import img_nam from "../../../Assets/Img/link_image_3_1.webp";
import img_tre_em from "../../../Assets/Img/link_image_4_1.webp";
import img_yd_love from "../../../Assets/Img/link_image_7_1.webp";
import logo from "../../../Assets/Icon/logo.svg";
import blank_cart from "../../../Assets/Icon/blank_cart.svg";
import { apiLogout } from "../../../Apis/auth";
import { authAction } from "../../../Redux/authSlice";

const list = [
  {
    name: "xuân hè 2022",
    link: "/xuan-he",
  },
  {
    name: "nữ",
    link: "/nu",
    key_mobile: "1",
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
    imgright: img_nu,
  },
  {
    name: "nam",
    link: "/nam",
    key_mobile: "2",
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
    imgleft: img_nam,
    imgright:
      "https://res.cloudinary.com/dhypn6jgk/image/upload/v1675773328/Yody/HomePage/BGR/link_image_3_1_tqwnvw.jpg",
  },
  {
    name: "trẻ em",
    link: "/tre-em",
    key_mobile: "3",
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
    imgleft: img_tre_em,
    imgright:
      "https://res.cloudinary.com/dhypn6jgk/image/upload/v1675773206/Yody/HomePage/BGR/link_image_4_1_twkoyz.jpg",
  },
  {
    name: "polo yody",
    link: "#",
  },
  {
    name: "bộ sưu tập",
    link: "#",
  },
  {
    name: "yody love",
    link: "#",
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
    imgright: img_yd_love,
  },
  {
    name: "đồng phục",
    link: "#",
  },
];

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = async () => {
    try {
      const res = await apiLogout();
      if (res.message === "Đăng xuất thành công") {
        dispatch(authAction.login({user: null, accessToken: ""}))
        navigate("/");
      }
    } catch (error) {}
  };
  // console.log(cart.length);
  return (
    <div className="navbar">
      <div className="container wrapper-container">
        <div className="navbar-header">
          <Link className="logo" to="/">
            <img src={logo} />
          </Link>
          <ul className="nav-list">
            {list.map((item) => {
              return (
                <li className="nav-item" key={item.name}>
                  <Link className="item-to" to={item?.link}>
                    {item.name}
                  </Link>
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
              spellCheck="false"
              placeholder="Tìm sản phấm"
            />
            <button className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="header-tool">
            <div className="user">
              <Link to="/login">
                <img src={usersvg} alt="user" />
              </Link>
              <ul className="account-header">
                {user ? (
                  <li className="logout" onClick={handleClick}>Đăng xuất</li>
                ) : (
                  <>
                    <li>
                      <Link to="/register">Đăng ký</Link>
                    </li>
                    <li>
                      <Link to="/login">Đăng nhập</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="like">
              <Link to="/like">
                <img src={heart} alt="" />
                <span className="message-box">Sản phẩm yêu thích</span>
              </Link>
            </div>
            <div className="cart">
              <Link to="/cart">
                <img src={cart_icon} alt="" />
                {cart.count > 0 && (
                  <span className="cart-count">{cart.count}</span>
                )}
              </Link>
              {cart.items.length === 0 && (
                <div className="cart-drop">
                  <div className="cart-container">
                    <div className="message">
                      <img src={blank_cart} alt="" />
                      <p>Giỏ hàng của bạn trống</p>
                      <Link to="" className="cart-login">
                        Đăng nhập/Đăng ký
                      </Link>
                      <span className="clear-fix"></span>
                      <Link to="" className="buy-now">
                        Mua ngay
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="menu-bars">
              <span className="icon-bars">
                <i className="fa-solid fa-bars"></i>
              </span>
            </div>
            <div className="nav-overlay"></div>
            <div className="nav-list-mobile nav-list">
              {list.map((item) => {
                if (item.key_mobile) {
                  return (
                    <div key={item.name}>
                      <ul className="nav-item">
                        <li className="nav-item">
                          <Link to="" className="item-to">
                            {item.name}
                          </Link>
                        </li>
                      </ul>
                      <ul className="">
                        {item.list.map((element) => {
                          return (
                            <li className="title" key={element.title}>
                              <Link to="" className="item-link">
                                {element.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                } else return "";
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
