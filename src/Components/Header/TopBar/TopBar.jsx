import React from "react";
import "./_topbar.scss";
import icfree from "../../../Assets/Avatar/free_tb.webp";

const TopBar = () => {
  return (
    <section className="topbar">
      {/* <div className="banner">
        <a href="#">
          <img src="https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/bannertop.jpg?1650423295558" />
        </a>
      </div> */}
      <div className="container">
        <div className="content content-text">
          <a className="location margin-right-12" href="#">
            <i className="location-icon fa-solid fa-location-dot"></i>
            Tìm<b>170+</b>cửa hàng
          </a>
          <a className="hotline margin-right-12" href="tel:1800 2086">
            <i className="fa-solid fa-phone"></i>
            <b>1800 2086</b>
            <img src={icfree} alt="free" />
          </a>
          <a className="support margin-right-12" href="#">
            <i className="fa-solid fa-envelope"></i>
            chamsockhachhang@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
