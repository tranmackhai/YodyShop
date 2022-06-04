import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { castToVND } from "../../../../Utils";

const CartResult = () => {
  const cart = useSelector((state) => state.cart.cart);
  const getTotalPrice = useMemo(()=>{
    let result = 0;
    cart.items.forEach(element => {
      result += (element.quantity * element.price)
    });
    return result;
  }, [cart])
  return (
    <div className="cart-result-wrap">
      <div className="cart-total-result">
        <div className="header-title">
          <span>Tổng cộng :</span>
        </div>
        <div className="total-price">{castToVND(getTotalPrice)}</div>
      </div>
      <button className="btn-pay">Thanh toán ({cart.count})</button>
      <p className="text">Dùng mã giảm giá của YODY trong bước tiếp theo</p>
    </div>
  );
};

export default CartResult;
