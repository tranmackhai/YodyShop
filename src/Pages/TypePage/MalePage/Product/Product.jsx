import React, { useEffect, useState } from "react";
import { castToVND } from "../../../../Utils";
import "./_product.scss";
import "../../../../Pages/HomePage/Body/ProductContent/_productcontent.scss";
import { Link } from "react-router-dom";

const Product = ({ propose }) => {
  const [active, setActive] = useState(propose[0]);
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(10);
  const loadmore = () => {
    setVisible((prev) => {
      if (prev >= products.length) {
        prev = 10;
      } else if (prev >= 10) {
        prev = prev + 5;
      }
      return prev;
    });
  };
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
  useEffect(() => {
    fetch("https://json-server-yodyshop.herokuapp.com/data", {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const result = data.filter((product) => product.type === "nu");
        setProducts(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(products);
  return (
    <div className="product">
      <div className="container">
        <div className="category-title buy-by">
          <h3>Đề xuất cho bạn</h3>
        </div>
        <ul className="propose">
          {propose.map((item, index) => {
            return (
              <li
                className={
                  active.name === item.name
                    ? "propose-item active"
                    : "propose-item"
                }
                onClick={() => setActive(item)}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <div className="row">
          {products.slice(0, visible).map((item) => {
            return (
              <div
                className="item-product content col-lg-2-5"
                key={item.id}
                style={{ flexBasis: "20%", maxWidth: "20%", padding : "0 10px"}}
              >
                <a href="#">
                  <div className="product-image">
                    <img src={item.image} alt="" />
                  </div>
                  <h3 className="product-name text-align-left">{item.name}</h3>
                </a>
                <div className="product-price-box">
                  <div className="price">{castToVND(item.price)}</div>
                  <div className="price-old">{castToVND(item.priceold)}</div>
                </div>
                <div className="option-view">
                  <div
                    className="row"
                    style={{ marginLeft: "0", marginRight: "0" }}
                  >
                    {showImages(item.images)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="" className="more" onClick={()=> {loadmore()}}>
        {visible < products.length ? "Xem thêm" : "Thu gọn"}
        </Link>
      </div>
    </div>
  );
};

export default Product;
