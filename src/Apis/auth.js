import { publicAxios } from "./configAxios";

export const apiRegister = (data) => {
  return publicAxios().post("auth/register", data);
};

export const apiLogin = (data) => {
  return publicAxios().post("auth/login", data);
};

export const apiLogout = () => {
  return publicAxios().post("auth/logout");
};

export const apiRefreshToken = () => {
  return publicAxios().post("auth/refreshToken");
};
