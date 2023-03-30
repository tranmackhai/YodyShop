import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./_account.scss";

const Account = () => {
  const user = useSelector(state => state.auth.user)
  return (
    <div className="block-content col-lg-9">
      <div className="separation-block-like">
        <div className="header-content">
          <span className="first-title">Thông tin cá nhân</span>
          <Link to="/location" className="last-title-infor">
            Sửa thông tin
          </Link>
        </div>
        <div className="body-content body-account">
          <span>Họ và tên: {`${user.first_name} ${user.last_name}`}</span>
          <span>Địa chỉ email: {`${user.email}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Account;
