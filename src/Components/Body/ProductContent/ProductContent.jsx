import React from "react";
import { castToVND } from "../../../Utils";
import "./_productcontent.scss"

const ProductContent = ({product}) => {
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
    </div>
  );
};

export default ProductContent;
