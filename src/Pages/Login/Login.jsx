import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./_login.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login">
      <div className="login-content bgr-image">
        <div className="container">
          <div className="form-login-register">
            <div className="group-frame">
              <div className="header">
                <h1>ĐĂNG NHẬP</h1>
              </div>
              <fieldset className="text-input">
                <input spellCheck = "false" type="email" placeholder="Email" />
              </fieldset>
              <fieldset className="text-input">
                <input spellCheck = "false" type={showPassword ? "text" : "password"} placeholder="Mật Khẩu" />
                <span onClick={()=>(setShowPassword(!showPassword))} className="icon-password">
                  {showPassword ? <i className="fa-solid fa-eye"></i> :  <i className="fa-solid fa-eye-slash"></i>}
                </span>
              </fieldset>
              <button className="btn-login">Đăng nhập</button>
              <p className="forgot">
                <Link to="#">Quên mật khẩu</Link>
                <Link to="/register">Đăng ký</Link>
              </p>
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
    </div>
  );
};

export default Login;
