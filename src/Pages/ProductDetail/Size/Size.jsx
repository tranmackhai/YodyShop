import React from "react";
import "../../ProductDetail/productdetail.scss"

function Size(props) {
  const { size, changeSize, setChangeSize } = props;
  const renderSize = () => {
    if (!size || !size.length) return;
    return size.map((item, index) => (
      <span
        className={
          changeSize === item
            ? "size-content__item active"
            : "size-content__item"
        }
        key={index}
        onClick={() => setChangeSize(item)}
      >
        {item}
      </span>
    ));
  };
  return <div className="size-content">{renderSize()}</div>;
}

export default Size;