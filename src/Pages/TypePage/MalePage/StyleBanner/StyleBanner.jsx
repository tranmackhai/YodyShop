import React from "react";
import { Link } from "react-router-dom";

const StyleBanner = ({ style }) => {
  return (
    <div className="style-banner">
      <div className="style-title buy-by">
        <h3>MUA THEO THỂ LOẠI</h3>
      </div>
      <div className="container">
        <div className="content row">
          <div className="banner-block-1 col-lg-6 px-3 py-3">
            <div className="banner">
              {style[0].block1.map((item, index) => (
                <img className="w-100" src={item.img} alt="" key={index} />
              ))}
            </div>
          </div>
          <div className="banner-block-2 col-lg-6">
            <div className="banner">
              <div className="row">
                {style[1].block2.map((item, index) => {
                  return (
                    <div className="col-lg-6 py-3 px-3" key={index}>
                      <Link to="">
                        <img className="w-100" src={item.img} alt="" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleBanner;
