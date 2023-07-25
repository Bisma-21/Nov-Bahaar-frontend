import "@/styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { wrapper } from "@/store";
import { useEffect } from "react";
import { getToken, setToken } from "../utils/localStorage";
import { saveUserDetails } from "../store/action/userAction";
import { getCartOfSingleUserAction } from "../store/action/cartAction";
import { saveWhishlistProductAction } from "../store/action/whishlistAction";
// import {  } from "../../store/action/whishlistAction";

import { useDispatch } from "react-redux";
function App({ Component, pageProps }) {
  const dispatch = useDispatch();
  // console.log("vvvvvvvvvvvvvvvv", getToken());
  useEffect(() => {
    const fun = async () => {
      if (getToken() != null) {
        const response = await fetch("http://localhost:4000/user/auto-login", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "x-access-token": getToken(),
          },
        });
        const result = await response.json();
        console.log("uuuuuuuuuuuuuuu====>", result.response);
        dispatch(saveUserDetails(result.response.users));
        dispatch(
          saveWhishlistProductAction(result.response.users.saveProducts)
        );
        if (result.response.cart != null) {
          console.log("not null cart");
          dispatch(getCartOfSingleUserAction(result.response.cart));
        }
      }
    };
    fun();
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default wrapper.withRedux(App);
// export default App;
