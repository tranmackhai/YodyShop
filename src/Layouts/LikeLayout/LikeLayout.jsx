import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SideBar from "../../Pages/LikePage/SideBar/SideBar";
import "./_likelayout.scss";
import User1 from "../../Assets/Icon/acc_user_1.svg";
import User1Active from "../../Assets/Icon/acc_user_1_hover.svg";
import User2 from "../../Assets/Icon/acc_user_2.svg";
import User2Active from "../../Assets/Icon/acc_user_2_hover.svg";
import User3 from "../../Assets/Icon/acc_user_3.svg";
import User3Active from "../../Assets/Icon/acc_user_3_hover.svg";
import User4 from "../../Assets/Icon/acc_user_4.svg";
import User4Active from "../../Assets/Icon/acc_user_4_hover.svg";
import User5 from "../../Assets/Icon/acc_user_5.svg";
import User5Active from "../../Assets/Icon/acc_user_5_hover.svg";
import User6 from "../../Assets/Icon/acc_user_6.svg";
import User6Active from "../../Assets/Icon/acc_user_6_hover.svg";

const LikeLayout = ({ children }) => {
  const list_item = [
    {
      active: false,
      icon: User1,
      icon_active: User1Active,
      title: "Tài khoản của tôi",
      link: "/user",
    },
    {
      active: false,
      icon: User2,
      icon_active: User2Active,
      title: "Đơn hàng của tôi",
      link: "/user",
    },
    {
      active: false,
      icon: User3,
      icon_active: User3Active,
      title: "Đổi mật khẩu",
      link: "/user",
    },
    {
      active: false,
      icon: User4,
      icon_active: User4Active,
      title: "Sổ địa chỉ",
      link: "/user",
    },
    {
      active: false,
      icon: User5,
      icon_active: User5Active,
      title: "Đã xem gần đây",
      header_title: "Tài khoản",
      link: "/recently-viewed",
    },
    {
      active: true,
      icon: User6,
      icon_active: User6Active,
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
