import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./_footer.scss";

const Footer = () => {
  const social = [
    "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_1.png?1646731994406",
    "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_2.png?1646731994406",
    "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_3.png?1646731994406",
    "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_4.png?1646731994406",
    "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_5.png?1646731994406",
    "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_6.png?1646731994406",
    "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_7.png?1646731994406",
  ];
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
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
                type="text"
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
          <div className="list-footer col-lg-2">
            <div className="title">
              <span>Về Yody</span>
            </div>
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
          <div className="list-footer col-lg-2">
            <div className="title">
              <span>HỖ TRỢ KHÁCH HÀNG</span>
            </div>
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
          <div className="list-footer col-lg-4">
            <ul className="menu">
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
            <img
              src="https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/logo_bct.png?1650954863867"
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
