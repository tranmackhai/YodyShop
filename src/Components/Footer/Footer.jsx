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
    "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_1.png?1646731994406",
    "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_2.png?1646731994406",
    "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_3.png?1646731994406",
    "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_4.png?1646731994406",
    "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_5.png?1646731994406",
    "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_6.png?1646731994406",
    "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/social_7.png?1646731994406",
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
              ????????t s??? h??i l??ng c???a kh??ch h??ng l?? ??u ti??n s??? 1 trong m???i suy ngh??
              h??nh ?????ng c???a m??nh??? l?? s??? m???nh, l?? tri???t l??, chi???n l?????c lu??n c??ng
              YODY ti???n b?????c???
            </p>
            <div className="title">
              <span>????NG K?? NH???N TH??NG TIN</span>
            </div>
            <div className="footer-register">
              <input
                type="email"
                placeholder="Nh???p email ????ng k?? c???a b???n"
                className="search"
              />
              <button className="btn-search">????ng k??</button>
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
                V??? Yody
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
                  <a href="">Gi???i thi???u</a>
                </li>
                <li className="menu-item">
                  <a href="">Li??n h???</a>
                </li>
                <li className="menu-item">
                  <a href="">Tuy???n d???ng</a>
                </li>
                <li className="menu-item">
                  <a href="">Tin t???c</a>
                </li>
                <li className="menu-item">
                  <a href="">H??? th???ng c???a h??ng</a>
                </li>
              </ul>
            ) : (
              ""
            )}
            <ul className="menu">
              <li className="menu-item">
                <a href="">Gi???i thi???u</a>
              </li>
              <li className="menu-item">
                <a href="">Li??n h???</a>
              </li>
              <li className="menu-item">
                <a href="">Tuy???n d???ng</a>
              </li>
              <li className="menu-item">
                <a href="">Tin t???c</a>
              </li>
              <li className="menu-item">
                <a href="">H??? th???ng c???a h??ng</a>
              </li>
            </ul>
          </div>
          <div className="list-footer col-lg-2 col-md-3">
            <div className="title">
              <span>
                H??? TR??? KH??CH H??NG
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
                  <a href="">H?????ng d???n ch???n size</a>
                </li>
                <li className="menu-item">
                  <a href="">Ch??nh s??ch kh??ch h??ng th??n thi???t</a>
                </li>
                <li className="menu-item">
                  <a href="">Ch??nh s??ch ?????i/tr???</a>
                </li>
                <li className="menu-item">
                  <a href="">Ch??nh s??ch b???o m???t</a>
                </li>
                <li className="menu-item">
                  <a href="">Thanh to??n, giao nh???n</a>
                </li>
              </ul>
            ) : (
              ""
            )}
            <ul className="menu">
              <li className="menu-item">
                <a href="">H?????ng d???n ch???n size</a>
              </li>
              <li className="menu-item">
                <a href="">Ch??nh s??ch kh??ch h??ng th??n thi???t</a>
              </li>
              <li className="menu-item">
                <a href="">Ch??nh s??ch ?????i/tr???</a>
              </li>
              <li className="menu-item">
                <a href="">Ch??nh s??ch b???o m???t</a>
              </li>
              <li className="menu-item">
                <a href="">Thanh to??n, giao nh???n</a>
              </li>
            </ul>
          </div>
          <div className="list-footer col-lg-4 col-md-6">
            <div className="title">
              <span className="title-mobile" >
                C??NG TY C??? PH???N TH???I TRANG YODY
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
                    C??ng ty c??? ph???n Th???i trang YODY <br />
                    M?? s??? thu???: 0801206940 <br />
                    ?????a ch???: ???????ng An ?????nh - Ph?????ng Vi???t Hoa -<br />
                    Th??nh ph??? H???i D????ng - H???i D????ng
                  </p>
                </li>
                <li className="menu-item last-text">
                  <img
                    src="https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/phone.svg?1650954863867"
                    alt=""
                  />
                  <div className="block-text">
                    <a href="">Li??n h??? ?????t h??ng: 024 730 56665</a>
                    <a href="">Th???c m???c ????n h??ng: 024 730 16661</a>
                    <a href="">G??p ?? khi???u n???i: 1800 2086</a>
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
                  C??ng ty c??? ph???n Th???i trang YODY <br />
                  M?? s??? thu???: 0801206940 <br />
                  ?????a ch???: ???????ng An ?????nh - Ph?????ng Vi???t Hoa -<br />
                  Th??nh ph??? H???i D????ng - H???i D????ng
                </p>
              </li>
              <li className="menu-item last-text">
                <img
                  src={phone}
                  alt=""
                />
                <div className="block-text">
                  <a href="">Li??n h??? ?????t h??ng: 024 730 56665</a>
                  <a href="">Th???c m???c ????n h??ng: 024 730 16661</a>
                  <a href="">G??p ?? khi???u n???i: 1800 2086</a>
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
          @ B???n quy???n thu???c v???
          <Link to="/"> Yody.vn </Link>
          All right reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
