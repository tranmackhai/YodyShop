import React from "react";
import "./_topbar.scss";
import icfree from "../../../Assets/Avatar/free_tb.webp";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <section className="topbar">
      {/* <div className="banner">
        <Link to="#">
          <img src="https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/bannertop.jpg?1650423295558" />
        </Link>
      </div> */}
      <div className="container">
        <div className="content content-text">
          <Link className="location margin-right-12" to="#">
            <i className="location-icon fa-solid fa-location-dot"></i>
            Tìm<b>170+</b>cửa hàng
          </Link>
          <Link className="hotline margin-right-12" to="tel:1800 2086">
            <i className="fa-solid fa-phone"></i>
            <b>1800 2086</b>
            <img src={icfree} alt="free" />
          </Link>
          <Link className="support margin-right-12" to="#">
            <i className="fa-solid fa-envelope"></i>
            chamsockhachhang@gmail.com
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
