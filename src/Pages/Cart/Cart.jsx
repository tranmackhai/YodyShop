import React, { useEffect, useState } from "react";
import "./_cart.scss";
import EmptyCart from "./Components/EmptyCart/EmptyCart";
import Product from "../../Components/Product/Product";
import CartItem from "./Components/CartItem/CartItem";
import buy_continue from "../../Assets/Icon/buy-continue.svg";
import CartResult from "./Components/CartResult/CartResult";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(18);
  const cart = useSelector((state) => state.cart.cart);
  // console.log(user)
  // console.log(cart);
  
  useEffect(() => {
    fetch("https://tranmackhai.github.io/api-yody/db.json", {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="cart">
      {cart.items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div
          className="cart-item"
          style={{ backgroundColor: "rgb(248, 248, 248)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8" style={{marginBottom : "24px"}}>
                <div className="header-cart-item">
                  <div className="cart-item-title">
                    <h4>Đơn hàng của bạn</h4>
                    <div className="count">
                      <span>({cart.count}) Sản phẩm</span>
                    </div>
                  </div>
                  <Link to="#" className="buying">
                    Tiếp tục mua hàng
                    <img src={buy_continue} alt="" />
                  </Link>
                </div>
                <div className="header-cart-info">
                  <span>Sản phẩm</span>
                  <span>Đơn giá</span>
                  <span>Số lượng</span>
                  <span>Thành tiền</span>
                </div>
                <div className="header-cart-ad">
                  <span>
                    20 người đang có sản phẩm giống bạn trong giỏ hàng. Nhanh
                    tay thanh toán trước khi hết hàng nhé!!!
                  </span>
                </div>
                {cart.items.map((item) => {
                  return <CartItem key={item.id} item={item} />;
                })}
              </div>
              <div className="cart-result col-lg-4">
                <CartResult />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="offer">
        <div className="container">
          <h1 className="header-title">Có thể bạn muốn mua</h1>
          <div className="row offer-product">
            {products.slice(0, showProducts).map((item) => {
              return (
                <div
                  className="item-product col-lg-2"
                  key={item.id}
                  style={{ paddingRight: "5px" }}
                >
                  <Product item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
