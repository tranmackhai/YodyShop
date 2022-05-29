import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import SideBar from "../SideBar/SideBar";
import "./_likelayout.scss";

const LikeLayout = ({ children }) => {
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
      header_title: "Tài khoản",
      link: "/recently-viewed",
    },
    {
      active: true,
      icon: "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/acc_user_6.svg",
      icon_active:
        "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/acc_user_6_hover.svg",
      title: "Sản phẩm yêu thích",
      header_title: "Yêu thích",
      link: "/like",
    },
  ];
  const [active, setActive] = useState(list_item[list_item.length - 1].title);
  return (
    <>
      <Header />
      <div className="like-page">
        <div className="header-like-content">
          <div className="top-header-like">
            <Link to="/" className="home">
              Trang chủ
            </Link>
            <span className="separation">/</span>
            <span className="text-like">{active}</span>
          </div>
          <h2 className="title-header">
            {list_item.find((item) => item.title === active).header_title}
          </h2>
          <div className="like-content container">
            <div className="row">
              <SideBar
                list_item={list_item}
                active={active}
                setActive={setActive}
              />
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LikeLayout;
