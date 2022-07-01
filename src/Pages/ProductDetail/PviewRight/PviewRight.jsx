import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Colors from "../Colors/Colors";
import Size from "../Size/Size";
import { castToVND } from "../../../Utils";
import { Link } from "react-router-dom";
import "../../ProductDetail/productdetail.scss";
import { addToCart } from "../../../Redux/cartSlice";
import { showToast } from "../../../Redux/toastSlice";

function PviewRight(props) {
  const dispatch = useDispatch();
  const { product, setColor, color } = props;
  const [changeSize, setChangeSize] = useState();
  const [qtt, setQtt] = useState(1);
  const handleChange = () => {};
  const handleMinus = () => {
    if (qtt > 1) {
      setQtt(qtt - 1);
    }
  };

  const handleAddToCart = () => {
    const index = product.colors.findIndex((item) => item === color);
    if (index !== -1) {
      dispatch(
        addToCart({
          ...product,
          color: {
            value: product.colorsName[index],
            code: product.colors[index],
          },
          size: changeSize,
          quantity: qtt,
        })
      );
      dispatch(
        showToast({
          type: "success",
          text: "Thêm thành công",
          isOpen: true,
        })
      );
    }
  };

  return (
    <div className="col-lg-4 col-md-6 pview-right">
      <div className="pview-right-content">
        <h1 className="pview-name">{product?.name}</h1>
        <div className="pview-price">
          <div className="pview-price__new">
            <b>{castToVND(product?.price)}</b>
          </div>
          <div className="pview-price__old">
            <del>{castToVND(product?.priceold)}</del>
          </div>
        </div>
        <div className="attr-req color mb-2">
          <div className="attr-color">
            {product?.colors?.length === 0 ? (
              ""
            ) : (
              <label>
                Màu sắc:{" "}
                {product?.colorsName
                  ? product?.colorsName[product?.colors.indexOf(color)]
                  : ""}
              </label>
            )}
          </div>
          <Colors colors={product?.colors} setColor={setColor} color={color} />
        </div>
        <div className="attr-req-size">
          {product?.size?.length !== 0 ? (
            <div className="attr-size">
              <label>Kích cỡ</label>
              <span>{changeSize}</span>
            </div>
          ) : (
            ""
          )}
          <Size
            size={product?.size}
            changeSize={changeSize}
            setChangeSize={setChangeSize}
          />
        </div>
        <div className="pview-quantity mt-4">
          <label className="mobile-qtt">Số lượng:</label>
          <div className="pview-quantity__box">
            <div className="qtt-action minus" onClick={handleMinus}>
              <span>-</span>
            </div>
            <input
              type="text"
              value={qtt}
              className="qtt-input"
              onChange={handleChange}
            />
            <div className="qtt-action plus" onClick={() => setQtt(qtt + 1)}>
              <span>+</span>
            </div>
          </div>
        </div>
        <div className="pview-total-money">
          <p>Tổng tiền</p>
          <p>{castToVND(product?.price * qtt)}</p>
        </div>
        <div className="pview-box-btn">
          <div className="add-to-cart">
            <button
              className="btn--add-to-cart"
              onClick={() => handleAddToCart(product, qtt)}
            >
              <span>
                <i class="fa-solid fa-cart-plus"></i>
              </span>
              Thêm giỏ hàng
            </button>
          </div>
          <div className="buy-now">
            <Link
              to="/cart"
              className="btn-buy-now"
              onClick={() => handleAddToCart(product, qtt)}
            >
              Mua ngay
            </Link>
          </div>
        </div>
        <div className="pview-web-endow">
          <h2>Ưu đãi website</h2>
          <div className="pview-web-endow__content">
            <p>Giao nhận hàng:</p>
            <ul>
              <li>Phí ship cho mỗi đơn hàng là 20.000Đ</li>
              <li>Miễn phí ship cho đơn hàng từ 498.000Đ</li>
              <li>
                Quý khách hàng được thoải mái thử đồ trước khi nhận hàng và
                thanh toán
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PviewRight;
