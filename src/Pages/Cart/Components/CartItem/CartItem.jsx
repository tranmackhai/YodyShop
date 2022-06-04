import React, { useState } from "react";
import { Link } from "react-router-dom";
import { castToVND } from "../../../../Utils";
import cart_remove from "../../../../Assets/Icon/remove_cart.svg";
import heart from "../../../../Assets/Icon/heart.svg";
import { useDispatch } from "react-redux";
import { deleteCartItem, updateCartItem } from "../../../../Redux/cartSlice";
const CartItem = ({ item }) => {
  // console.log(item);
  const dispatch = useDispatch();
  const handleChange = (newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateCartItem({ ...item, quantity: newQuantity }));
    } else {
      dispatch(deleteCartItem(item.id));
    }
  };
  return (
    <div className="cart-item">
      <div className="block-item cart-item-detail">
        <div className="product-detail-block">
          <Link to="" className="cart-product-img">
            <img src={item.images[item.color.code]} alt="" />
          </Link>
          <div className="product-info">
            <div className="cart-product-name cart-name">
              <Link to="">{item.name}</Link>
              <span className="color-size">
                {item.color.value} / {item.size}
              </span>
              <div className="remove-cart">
                <div
                  className="cart-btn-remove"
                  onClick={() => {
                    dispatch(deleteCartItem(item.id));
                  }}
                >
                  <img src={cart_remove} alt="" />
                  Xoá
                </div>
                <span className="cart-like">
                  <div className="cart-btn-like">
                    <img src={heart} alt="" />
                    Lưu trong danh sách yêu thích
                  </div>
                </span>
              </div>
            </div>
            <div className="grid">
              <span className="unit-price price">{castToVND(item.price)}</span>
            </div>
            <div className="grid grid-quantity">
              <div className="amount">
                <div className="input-group-btn">
                  <button
                    className="get-reduce btn-count"
                    onClick={() => handleChange(item.quantity - 1)}
                  >
                    -
                  </button>
                  <input
                    className="input-quantity"
                    type="text"
                    value={item.quantity}
                    onChange={(e) => handleChange(parseInt(e.target.value))}
                  />
                  <button
                    className="get-rise btn-count"
                    onClick={() => handleChange(item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-total-price">
              <span className="total-price price">
                {castToVND(item.price * item.quantity)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
