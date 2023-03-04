import axios from "axios";

export const publicAxios = () => {
  const instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3050/",
  });

  instance.interceptors.response.use((res) => res.data);

  return instance;
};
