import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PviewImage from "./PviewImage/PviewImage";
import PviewRight from "./PviewRight/PviewRight";
import "./productdetail.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(`https://json-server-yodyshop.herokuapp.com/data/${id}`, {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const [color, setColor] = useState();

  useEffect(() => {
    setColor(product?.colors ? product.colors[0] : "");
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(color);
  return (
    <div className="page-product__detail col-12">
      <div className="container">
        <div className="row pview-detail col-12">
          <PviewImage product={product} color={color} />
          <PviewRight product={product} setColor={setColor} color={color} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
