const KEY = "ecommerceLoginToken";

export const getToken = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const token = localStorage.getItem(KEY);
    // console.log("xxxxxxxxxxxxxxxxxx", token);
    return token;
  }
};

export const setToken = (value) => {
  localStorage.setItem(KEY, value);
};

export const removeToken = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    localStorage.removeItem(KEY);
    // localStorage.clear()
    // console.log("xxxxxxxxxxxxxxxxxx", token);
  }
};
