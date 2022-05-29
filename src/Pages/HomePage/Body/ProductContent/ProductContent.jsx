import React from "react";
import { castToVND } from "../../../../Utils";
import "./_productcontent.scss";

const ProductContent = ({ product }) => {
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
  return (
    <div className="item-product">
      <a href="">
        <div className="product-image">
          <img src={product.image} alt="" />
        </div>
        <h3 className="product-name">{product.name}</h3>
      </a>
      <div className="product-price-box">
        <div className="price">{castToVND(product.price)}</div>
        <div className="price-old">{castToVND(product.priceold)}</div>
      </div>
      <div className="option-view">
        <div className="row" style={{ marginLeft: "0", marginRight: "0" }}>
          {showImages(product.images)}
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
