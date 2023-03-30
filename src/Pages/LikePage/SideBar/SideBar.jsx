import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { apiLogout } from "../../../Apis/auth";
import IconUser from "../../../Assets/Avatar/account_ava.webp";
import { authAction } from "../../../Redux/authSlice";
import "./_sidebar.scss";

const SideBar = ({ list_item, active, setActive }) => {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = async ()=>{
    try {
      const res = await apiLogout();
      if (res.message === "Đăng xuất thành công") {
        dispatch(authAction.login({ user: null, accessToken: "" }));
        navigate("/");
      }
    } catch (error) { }
  }
  return (
    <div className="block-like-account col-lg-3">
      <div className="info">
        <img
          src={IconUser}
          alt=""
        />
        {!user ? <div className="account">
          <div className="wrap-user-account">
            <Link to="/login" className="user">
              Đăng nhập
            </Link>
            <span className="separation">/</span>
            <Link to="/register" className="user">
              Đăng ký
            </Link>
          </div>
          <div style={{width : "100%"}}>
            <Link to="/login" className="goto-user">
              Trải nghiệm ngay bây giờ
            </Link>
          </div>
        </div> : <div style={{width : "100%"}}>
          <span>{`${user.first_name} ${user.last_name}`}</span>
          <Link to="/" className="goto-user" onClick={handleLogout}> Đăng xuất </Link>
        </div>}
      </div>
      <ul>
        {list_item.map((item, index) => {
          return (
            <li
              onClick={() => {
                setActive(item.title);
              }}
              className={item.title === active ? "active" : ""}
              key={index}
            >
              <Link to={item.link}>
                <img
                  src={item.title === active ? item.icon_active : item.icon}
                  alt=""
                />
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
