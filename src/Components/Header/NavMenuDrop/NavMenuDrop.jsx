import React from "react";
import { useSelector } from "react-redux";
import "./_navmenudrop.scss";

const NavMenuDrop = ({ list, imgleft, imgright }) => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <>
    
        <div className="nav-menu-drop">
          {imgleft && (
            <div className="banner">
              <img src={imgleft} alt="" />
            </div>
          )}
          <div className="row" style={{ padding: "0 12px", flex: 1 }}>
            {list.map((item) => {
              return (
                <ul className="col" style={{}} key={item.title}>
                  <li className="title">
                    <a className="item-link" href="">
                      {item.title}
                    </a>
                  </li>
                  {item.items.map((value, index) => {
                    return (
                      <li className="item" key={index}>
                        <a className="item-link" href="">
                          {value.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>

          {imgright && (
            <div className="banner">
              <img src={imgright} alt="" />
            </div>
          )}
        </div>
    
    </>
  );
};

export default NavMenuDrop;
