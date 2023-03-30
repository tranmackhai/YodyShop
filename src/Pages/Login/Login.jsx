import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { apiLogin } from "../../Apis/auth";
import { authAction } from "../../Redux/authSlice";
import "./_login.scss";

const Login = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data)
    try {
      const res = await apiLogin(data);
      // console.log(res)
      if (res.user) {
        dispatch(authAction.login(res));
        navigate("/");
      }
    } catch (error) {
      setError("Email hoặc mật khẩu không chính xác");
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="login" onSubmit={handleSubmit(onSubmit)}>
      <div className="login-content bgr-image">
        <div className="container">
          <div className="form-login-register">
            <div className="group-frame">
              <div className="header">
                <h1>ĐĂNG NHẬP</h1>
              </div>
              {error !== "" ? <div className="error">{error}</div> : <></>}
              <fieldset className="text-input">
                <input
                  spellCheck="false"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </fieldset>
              <fieldset className="text-input">
                <input
                  spellCheck="false"
                  type={showPassword ? "text" : "password"}
                  placeholder="Mật Khẩu"
                  {...register("password", { required: true })}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="icon-password"
                >
                  {showPassword ? (
                    <i className="fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                  )}
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
                <Link to="social-login-facebook">
                  <img
                    src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                    alt=""
                  />
                </Link>
                <Link to="social-login-google">
                  <img
                    src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
