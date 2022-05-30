import React from "react";
import Banner from "./Components/Banner/Banner";
import Category from "./Components/Category/Category";
import StyleBanner from "./Components/StyleBanner/StyleBanner";
import Product from "./Components/Product/Product";
import Blog from "./Components/Blog/Blog";

const MalePage = ({ data }) => {
  return (
    <div className="male-page">
      <Banner banner={data.banner} />
      <Category category={data.category} />
      <StyleBanner style={data.style} />
      <Product propose={data.propose} type={data.type} />
      <Blog blog={data.blog} />
    </div>
  );
};

export default MalePage;
