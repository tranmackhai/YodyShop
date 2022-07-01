import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastify.scss"
const Toastify = () => {
  const toastMessage = useSelector((state) => state.toast.toastMessage);
  useEffect(() => {
    if (toastMessage.text !== "") {
      toast[toastMessage.type](toastMessage.text, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [toastMessage]);
  if (!toastMessage.isOpen) {
    return "";
  } else {
    return (
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    );
  }
};

export default memo(Toastify);
