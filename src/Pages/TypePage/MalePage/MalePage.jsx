import React from "react";
import Banner from "./Banner/Banner";
import typedata from "../../../typedata.json";
import Category from "./Category/Category";
import StyleBanner from "./StyleBanner/StyleBanner";
import Product from "./Product/Product";
import Blog from "./Blog/Blog";
const data = typedata.find((item) => item.type === "nu");

const MalePage = () => {
  return (
    <div className="male-page">
      <Banner banner={data.banner} />
      <Category category={data.category} />
      <StyleBanner style={data.style} />
      <Product propose={data.propose} />
      <Blog blog={data.blog} />
    </div>
  );
};

export default MalePage;
