import React from 'react';
import Content from './Content/Content';
import SectionBanner from "./SectionBanner/SectionBanner";
import SectionBlog from './SectionBlog/SectionBlog';
import SectionProduct from  "./SectionProduct/SectionProduct";
import Service from  "./Service/Service";
import Slider from   "./Slider/Slider";

const Body = () => {
  return (
    <div>
      <Slider />
      <Service/>
      <SectionProduct/>
      <SectionBanner/>
      <Content />
      <SectionBlog/>
    </div>
  );
};

export default Body;