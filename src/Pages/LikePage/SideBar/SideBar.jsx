import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./_sidebar.scss";

const SideBar = ({ list_item, active, setActive }) => {
  return (
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
                  src={item.title === active ? item.icon_active : item.icon}
                  alt=""
                />
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
