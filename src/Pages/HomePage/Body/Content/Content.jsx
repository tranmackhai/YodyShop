import React, { useEffect, useState } from "react";
import Product from "../../../../Components/Product/Product";
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
  const [visible, setVisible] = useState(20);
  const [filterProducts, setFilterProducts] = useState([]);
  // const loadmore = () => {
  //   setVisible((prev) => {
  //     if (prev >= 20) {
  //       prev = prev + 10;
  //     } else if (prev >= products.length){
  //       prev = 20;
  //     }
  //     return prev;
  //   });
  // };
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
  useEffect(() => {
    setFilterProducts(
      [...products].filter((item) =>
        item.name.toLowerCase().includes(active.toLowerCase())
      )
    );
  }, [active, products]);

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
                    onClick={() => {
                      setActive(title.name);
                    }}
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
            {(filterProducts.length > 0 ? filterProducts : products)
              .slice(0, visible)
              .map((item) => {
                return (
                  <div key={item.id} className="col-lg-2-5 col-md-3 col-6">
                    <Product item={item} />
                  </div>
                );
              })}
          </div>
          {visible <
            (filterProducts.length > 0
              ? filterProducts.length
              : products.length) && (
            <div
              className="more"
              onClick={() => {
                setVisible(visible + 10);
              }}
            >
              {/* {visible < products.length ? "Xem thêm" : "Thu gọn"} */}
              Xem thêm
            </div>
          )}
          {visible > 20 &&
            visible >=
              (filterProducts.length > 0
                ? filterProducts.length
                : products.length) && (
              <div
                className="more"
                onClick={() => {
                  setVisible(20);
                }}
              >
                {/* {visible < products.length ? "Xem thêm" : "Thu gọn"} */}
                Thu gọn
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Content;
