import React, { useEffect, useState } from "react";
import "./_products.scss";
import { Link } from "react-router-dom";
import Product from "../../../../Components/Product/Product";

const Products = ({ propose, type }) => {
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
  useEffect(() => {
    fetch("https://json-server-yodyshop.herokuapp.com/data", {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        const result = data.filter((product) => product.type === type);
        setProducts(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [type]);
  // console.log(products);
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
                <Product item = {item}/>
              </div>
            );
          })}
        </div>
        <Link to="#" className="more" onClick={()=> {loadmore()}}>
        {visible < products.length ? "Xem thêm" : "Thu gọn"}
        </Link>
      </div>
    </div>
  );
};

export default Products;
