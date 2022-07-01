import "../../ProductDetail/productdetail.scss";

function PviewRight(props) {
  const { product, color } = props;
  console.log(product)
  // const { images, description } = product;
  

  return (
    <div className="col-lg-8 col-md-6 col-12 pview-img">
      <div className="row pview-img-wrapper">
        <div className="col-lg-9 pview-main-img">
          {product?.images && (
            <img className="w-100 mt-4 mb-4" src={product?.images[color]} alt="" />
          )}
        </div>
      </div>
      <div className="row pview-product__content">
        <div className="col-12">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <span>Chi tiết sản phẩm</span>
            </li>
          </ul>
          <div className="tabs-product-content">
            <div className="tpc-detail">
              <div className="tpc-detail__content">
                <p>{product?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PviewRight;
