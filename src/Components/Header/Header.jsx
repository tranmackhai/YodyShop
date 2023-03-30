import React from "react";
import Navbar from "./Navbar/Navbar";
import TopBar from "./TopBar/TopBar";

const Header = () => {
  return (
    <div className="wrapper-header" >
      <TopBar />
      <Navbar />
    </div>
  );
};

export default Header;
