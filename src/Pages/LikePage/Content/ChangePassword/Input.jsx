import React, { useState } from "react";

const Input = ({ id, label, register }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="wrapper_fieldset">
      <label htmlFor={id} style={{ marginLeft: "24px", cursor: "pointer"}}>
        {label}
      </label>
      <fieldset className="text-input">
        <input
          id={id}
          spellCheck="false"
          type={showPassword ? "text" : "password"}
          placeholder=""
          {...register}
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
    </div>
  );
};

export default Input;
