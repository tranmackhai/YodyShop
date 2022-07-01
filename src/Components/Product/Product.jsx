import React from "react";
import { castToVND } from "../../Utils";
import "./_product.scss";
import btn_cart from "../../Assets/Icon/btn_cart.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
import { Link } from "react-router-dom";
import { showToast } from "../../Redux/toastSlice";

const Product = ({ item, showOption }) => {
  const showImages = (images) => {
    const arr = [];
    for (const key in images) {
      arr.push(
        <div key={key} className="view-color">
          <img src={images[key]} alt="" />
        </div>
      );
    }
    return arr;
  };
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...item,
        color: { value: item.colorsName[0], code: item.colors[0] },
        size: item.size[0],
        quantity: 1,
      })
    );
    dispatch(
      showToast({
        type: "success",
        text: "Thêm thành công",
        isOpen: true,
      })
    );
  };
  // console.log(item);
  return (
    <>
      <div className="wrap-image">
        <Link to={`/product/${item.id}`}>
          <div className="product-image">
            <img src={item.image} alt="" />
          </div>
        </Link>
        <img
          onClick={handleAddToCart}
          className="btn-add-to-cart"
          src={btn_cart}
          alt=""
        />
      </div>
      <Link to={`/product/${item.id}`}>
        <h3 className="product-name text-align-left">{item.name}</h3>
      </Link>
      <div className="product-price-box">
        <div className="price">{castToVND(item.price)}</div>
        <div className="price-old">{castToVND(item.priceold)}</div>
      </div>
      {!showOption && (
        <div className="option-view">
          <div className="row" style={{ marginLeft: "0", marginRight: "0" }}>
            {item.images && showImages(item?.images)}
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
