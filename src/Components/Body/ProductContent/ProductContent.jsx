import React from "react";
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
        <div className="price">{product.price}</div>
        <div className="price-old">{product.priceold}</div>
      </div>
    </div>
  );
};

export default ProductContent;
