import React, { useState } from "react";
import "./_register.scss";
import "../Login/_login.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { apiRegister } from "../../Apis/auth";
import { authAction } from "../../Redux/authSlice";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (data) => {
    try {
      const res = await apiRegister(data);
      console.log(res);
      if (res.user) {
        dispatch(authAction.login(res));
        navigate("/");
      }
    } catch (error) {}
  };
  if(user) return <Navigate to="/"/>
  return (
    <form className="register" onSubmit={handleSubmit(onSubmit)}>
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
                    <input
                      spellCheck="false"
                      type="text"
                      placeholder="Tên"
                      {...register("first_name", { required: true })}
                    />
                  </fieldset>
                </div>
                <div className="col-6" style={{ paddingLeft: "0" }}>
                  <fieldset className="text-input">
                    <input
                      spellCheck="false"
                      type="text"
                      placeholder="Họ"
                      {...register("last_name", { required: true })}
                    />
                  </fieldset>
                </div>
              </div>
              <fieldset className="text-input">
                <input
                  spellCheck="false"
                  type="text"
                  placeholder="Số điện thoại"
                  {...register("phone", { required: true })}
                />
              </fieldset>
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
                  placeholder="Mật khẩu"
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
              <div className="box-interests">
                <p>Sở thích</p>
                <span>
                  <input
                    type="radio"
                    id="radio-1"
                    name="favorite"
                    value="radio-1"
                    {...register("favorite", { required: true })}
                  />
                  <label htmlFor="radio-1">Thời trang nam</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="radio-2"
                    name="favorite"
                    value="radio-2"
                    {...register("favorite", { required: true })}
                  />
                  <label htmlFor="radio-2">Thời trang nữ</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="radio-3"
                    name="favorite"
                    value="radio-3"
                    {...register("favorite", { required: true })}
                  />
                  <label htmlFor="radio-3">Thời trang trẻ em</label>
                </span>
              </div>
              <button className="btn-register">Đăng ký</button>
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

export default Register;
