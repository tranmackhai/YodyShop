import React from "react";
import "../../ProductDetail/productdetail.scss"

function Colors(props) {
  const { colors, setColor, color } = props;
  const changeColorImage = (color) => {
    setColor(color);
  };
  const renderColors = () => {
    if (!colors || !colors.length) return;
    return colors.map((colo, index) => (
      <span
        className={
          color === colo ? "color-content__item active" : "color-content__item"
        }
        style={{ background: colo }}
        key={index}
        onClick={() => changeColorImage(colo)}
      ></span>
    ));
  };
  return <div className="color-content">{renderColors()}</div>;
}

export default Colors;