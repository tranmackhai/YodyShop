import React from "react";
import { Link } from "react-router-dom";
import "./_category.scss";

const Category = ({ category }) => {
  return (
    <div className="category">
      <div className="container">
        <div className="category-title buy-by">
          <h3>DANH MỤC NỔI BẬT</h3>
        </div>
        <div className="category-content row">
          {category.map((item, index) => {
            return (
              <Link to="#" className="list-category col-lg-2-5" key={index}>
                <div className="category-img">
                  <img src={item.img} alt="" />
                  <span className="category-name">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
