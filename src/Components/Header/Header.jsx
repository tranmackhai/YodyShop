import React from "react";
import Navbar from "./Navbar/Navbar";
import TopBar from "./TopBar/TopBar";

const Header = () => {
  return (
    <div style={{position : "fixed", width: "100%", zIndex: "99"}}>
      <TopBar />
      <Navbar />
    </div>
  );
};

export default Header;
