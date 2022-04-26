import React, { useEffect, useState } from "react";
import ProductContent from "../ProductContent/ProductContent";
import "./_content.scss";

const title = [
  {
    name: "cafe",
  },
  {
    name: "mắt chim",
  },
  {
    name: "coolmax",
  },
  {
    name: "airy cool",
  },
  {
    name: "vỏ hàu",
  },
  {
    name: "cool compact",
  },
  {
    name: "airmax",
  },
  {
    name: "askin",
  },
];

const Content = () => {
  const [active, setActive] = useState("cafe");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://json-server-yodyshop.herokuapp.com/data", {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Content">
      <div className="header-content">
        <div className="container">
          <div className="content-title">
            <h2>POLO YODY - THOẢI MÁI, TỰ TIN MỌI LÚC MỌI NƠI</h2>
          </div>
          <div className="title-desktop">
            <ul className="list-title">
              {title.map((title) => {
                return (
                  <li
                    key={title.name}
                    onClick={() => setActive(title.name)}
                    className={
                      active === title.name
                        ? "list-title-item item-active"
                        : "list-title-item"
                    }
                  >
                    {title.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="product-main">
        <div className="container">
          <div className="row">
            {products.map((product) => {
              return (
                <div key={product.id}
                  className="col-2"
                  style={{ flexBasis: "20%", maxWidth: "20%" }}
                >
                  <ProductContent product={product} />
                </div>
              );
            })}
          </div>
          <a href="" className="more">
            Xem thêm
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
