import React from "react";
import cart_icon from "../../../../Assets/Icon/blank_cart.svg";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="cart-header no-product">
      <div className="cart-icon">
        <img src={cart_icon} alt="" />
        <p className="text">Giỏ hàng của bạn đang trống</p>
      </div>
      <div className="cart-user">
        <Link to="/login" className="login-user">
          Đăng nhập/Đăng ký
        </Link>
        <Link to="/all" className="buy-now">
          Mua ngay
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
