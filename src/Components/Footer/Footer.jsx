import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import map from "../../Assets/Icon/map.svg";
import phone from "../../Assets/Icon/phone.svg";
import email from "../../Assets/Icon/email.svg";
import logo_btc from "../../Assets/Avatar/logo_bct.webp";
import logo_footer from "../../Assets/Avatar/logo_footer.webp"
import "./_footer.scss";

const Footer = () => {
  const social = [
    "https://res.cloudinary.com/dhypn6jgk/image/upload/v1675682066/Yody/HomePage/Icon/social_1_xxepui.png",
    "https://res.cloudinary.com/dhypn6jgk/image/upload/v1675682067/Yody/HomePage/Icon/social_2_hc36kd.png",
    "https://res.cloudinary.com/dhypn6jgk/image/upload/v1675682066/Yody/HomePage/Icon/social_3_iujkde.png",
    "https://res.cloudinary.com/dhypn6jgk/image/upload/v1675682066/Yody/HomePage/Icon/social_4_l5bydo.png",
    "https://res.cloudinary.com/dhypn6jgk/image/upload/v1675682066/Yody/HomePage/Icon/social_5_utwjky.png",
    "https://res.cloudinary.com/dhypn6jgk/image/upload/v1675682066/Yody/HomePage/Icon/social_6_nafrqq.png",
    "https://res.cloudinary.com/dhypn6jgk/image/upload/v1675682067/Yody/HomePage/Icon/social_7_e8wxe7.png",
    
  ];
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      <div className="footer-content container">
        {visible && (
          <button className="btn-backtop" onClick={scrollToTop}>
            <i className="fa-solid fa-arrow-up-long"></i>
          </button>
        )}
        <div className="row">
          <div className="list-footer col-lg-4">
            <div className="logo-footer-mobile">
              <Link to="/">
                <img
                  src={logo_footer}
                  alt=""
                />
              </Link>
            </div>
            <p className="commit">
              “Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ
              hành động của mình” là sứ mệnh, là triết lý, chiến lược luôn cùng
              YODY tiến bước”
            </p>
            <div className="title">
              <span>ĐĂNG KÝ NHẬN THÔNG TIN</span>
            </div>
            <div className="footer-register">
              <input
                type="email"
                placeholder="Nhập email đăng ký của bạn"
                className="search"
              />
              <button className="btn-search">Đăng ký</button>
            </div>
            <div className="list-icon">
              {social.map((icon) => {
                return (
                  <div className="icon" key={icon}>
                    <a href="">
                      <img src={icon} alt="" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="list-footer col-lg-2 col-md-3 ">
            <div className="title">
              <span>
                Về Yody
                {status ? (
                  <i
                    class="icon-up fa-solid fa-caret-up"
                    onClick={() => {
                      setStatus(false);
                    }}
                  ></i>
                ) : (
                  <i
                    className="icon-down fa-solid fa-sort-down"
                    onClick={() => {
                      setStatus(true);
                    }}
                  ></i>
                )}
              </span>
            </div>
            {status ? (
              <ul className="menu-mobile">
                <li className="menu-item">
                  <a href="">Giới thiệu</a>
                </li>
                <li className="menu-item">
                  <a href="">Liên hệ</a>
                </li>
                <li className="menu-item">
                  <a href="">Tuyển dụng</a>
                </li>
                <li className="menu-item">
                  <a href="">Tin tức</a>
                </li>
                <li className="menu-item">
                  <a href="">Hệ thống cửa hàng</a>
                </li>
              </ul>
            ) : (
              ""
            )}
            <ul className="menu">
              <li className="menu-item">
                <a href="">Giới thiệu</a>
              </li>
              <li className="menu-item">
                <a href="">Liên hệ</a>
              </li>
              <li className="menu-item">
                <a href="">Tuyển dụng</a>
              </li>
              <li className="menu-item">
                <a href="">Tin tức</a>
              </li>
              <li className="menu-item">
                <a href="">Hệ thống cửa hàng</a>
              </li>
            </ul>
          </div>
          <div className="list-footer col-lg-2 col-md-3">
            <div className="title">
              <span>
                HỖ TRỢ KHÁCH HÀNG
                {status2 ? (
                  <i
                    class="icon-up fa-solid fa-caret-up"
                    onClick={() => {
                      setStatus2(false);
                    }}
                  ></i>
                ) : (
                  <i
                    className="icon-down fa-solid fa-sort-down"
                    onClick={() => {
                      setStatus2(true);
                    }}
                  ></i>
                )}
              </span>
            </div>
            {status2 ? (
              <ul className="menu-mobile">
                <li className="menu-item">
                  <a href="">Hướng dẫn chọn size</a>
                </li>
                <li className="menu-item">
                  <a href="">Chính sách khách hàng thân thiết</a>
                </li>
                <li className="menu-item">
                  <a href="">Chính sách đổi/trả</a>
                </li>
                <li className="menu-item">
                  <a href="">Chính sách bảo mật</a>
                </li>
                <li className="menu-item">
                  <a href="">Thanh toán, giao nhận</a>
                </li>
              </ul>
            ) : (
              ""
            )}
            <ul className="menu">
              <li className="menu-item">
                <a href="">Hướng dẫn chọn size</a>
              </li>
              <li className="menu-item">
                <a href="">Chính sách khách hàng thân thiết</a>
              </li>
              <li className="menu-item">
                <a href="">Chính sách đổi/trả</a>
              </li>
              <li className="menu-item">
                <a href="">Chính sách bảo mật</a>
              </li>
              <li className="menu-item">
                <a href="">Thanh toán, giao nhận</a>
              </li>
            </ul>
          </div>
          <div className="list-footer col-lg-4 col-md-6">
            <div className="title">
              <span className="title-mobile" >
                CÔNG TY CỔ PHẦN THỜI TRANG YODY
                {status3 ? (
                  <i
                    class="icon-up fa-solid fa-caret-up"
                    onClick={() => {
                      setStatus3(false);
                    }}
                  ></i>
                ) : (
                  <i
                    className="icon-down fa-solid fa-sort-down"
                    onClick={() => {
                      setStatus3(true);
                    }}
                  ></i>
                )}
              </span>
            </div>
            {status3 ? (
              <ul className="menu-mobile">
                <li className="menu-item last-text">
                  <img
                    src="https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/map.svg?1650954863867"
                    alt=""
                  />
                  <p>
                    Công ty cổ phần Thời trang YODY <br />
                    Mã số thuế: 0801206940 <br />
                    Địa chỉ: Đường An Định - Phường Việt Hoa -<br />
                    Thành phố Hải Dương - Hải Dương
                  </p>
                </li>
                <li className="menu-item last-text">
                  <img
                    src="https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/phone.svg?1650954863867"
                    alt=""
                  />
                  <div className="block-text">
                    <a href="">Liên hệ đặt hàng: 024 730 56665</a>
                    <a href="">Thắc mắc đơn hàng: 024 730 16661</a>
                    <a href="">Góp ý khiếu nại: 1800 2086</a>
                  </div>
                </li>
                <li className="menu-item last-text">
                  <img
                    src="https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/email.svg?1650954863867"
                    alt=""
                  />
                  <a href="tranmackhai@gmail.com">
                    Email: chamsockhachhang@yody.vn
                  </a>
                </li>
              </ul>
            ) : (
              ""
            )}
            <ul className="menu">
              <li className="menu-item last-text">
                <img
                  src={map}
                  alt=""
                />
                <p>
                  Công ty cổ phần Thời trang YODY <br />
                  Mã số thuế: 0801206940 <br />
                  Địa chỉ: Đường An Định - Phường Việt Hoa -<br />
                  Thành phố Hải Dương - Hải Dương
                </p>
              </li>
              <li className="menu-item last-text">
                <img
                  src={phone}
                  alt=""
                />
                <div className="block-text">
                  <a href="">Liên hệ đặt hàng: 024 730 56665</a>
                  <a href="">Thắc mắc đơn hàng: 024 730 16661</a>
                  <a href="">Góp ý khiếu nại: 1800 2086</a>
                </div>
              </li>
              <li className="menu-item last-text">
                <img
                  src={email}
                  alt=""
                />
                <a href="tranmackhai@gmail.com">
                  Email: chamsockhachhang@yody.vn
                </a>
              </li>
            </ul>
            <img
              src={logo_btc}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="lisence">
        <span>
          @ Bản quyền thuộc về
          <Link to="/"> Yody.vn </Link>
          All right reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
