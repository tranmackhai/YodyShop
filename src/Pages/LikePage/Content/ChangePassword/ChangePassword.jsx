import React from "react";
import Input from "./Input";
import "./_changepassword.scss";

const ChangePassword = () => {
  return (
    <div className="block-content col-lg-9">
      <div className="separation-block-like">
        <div className="header-content">
          <span className="first-title">Đổi mật khẩu</span>
          <span className="last-title">
            (Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người
            khác)
          </span>
        </div>
        <div className="body-content body-change-password">
          <Input
            label={"Mật khẩu hiện tại*"}
            id={"password"}
            // register={register("password", { required: true })}
          />
          <Input label={"Mật khẩu mới*"} id={"new-password"} />
          <Input label={"Xác nhận mật khẩu mới* "} id={"confirm-password"} />
          <div className="wrapper-btn-change-password">
            <button className="button-page_user btn-change-password-save">
              Lưu
            </button>
            <button className="button-page_user btn-change-password-cancle">
              Huỷ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
