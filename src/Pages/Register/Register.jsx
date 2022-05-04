import React from "react";
import "./_register.scss";
import "../Login/_login.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Register = () => {
  return (
    <div className="register">
      <Header />
      <div className="register-content bgr-image">
        <div className="container">
          <div className="form-login-register">
            <div className="group-frame">
              <div className="header">
                <h1>ĐĂNG KÝ</h1>
              </div>
              <div className="row">
                <div className="col-6">
                  <fieldset className="text-input">
                    <input type="text" placeholder="Tên" />
                  </fieldset>
                </div>
                <div className="col-6" style={{ paddingLeft: "0" }}>
                  <fieldset className="text-input">
                    <input type="text" placeholder="Họ" />
                  </fieldset>
                </div>
              </div>
              <fieldset className="text-input">
                <input type="text" placeholder="Số điện thoại" />
              </fieldset>
              <fieldset className="text-input">
                <input type="text" placeholder="Email" />
              </fieldset>
              <fieldset className="text-input">
                <input type="text" placeholder="Mật khẩu" />
              </fieldset>
              <div className="box-interests">
                <p>Sở thích</p>
                <span>
                  <input
                    type="radio"
                    id="radio-1"
                    name="fashion"
                    value="radio-1"
                  />
                  <label htmlFor="radio-1">Thời trang nam</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="radio-2"
                    name="fashion"
                    value="radio-2"
                  />
                  <label htmlFor="radio-2">Thời trang nữ</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="radio-3"
                    name="fashion"
                    value="radio-3"
                  />
                  <label htmlFor="radio-3">Thời trang trẻ em</label>
                </span>
              </div>
              <button className="btn-register">
                Đăng ký
              </button>
              <div className="social-login-register">
                <p className="a-center or">
                  <span>--- Hoặc ---</span>
                </p>
                <a href="social-login-facebook">
                  <img
                    src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                    alt=""
                  />
                </a>
                <a href="social-login-google">
                  <img
                    src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
