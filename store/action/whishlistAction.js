import {
  addWhishlistProductDetail,
  removeWhishlistProductDetail,
  saveWhishlistedProductDetail,
} from "../types";

export const addProductInWhishlistAction = (e) => {
  // console.log("insiode whishlist action handler==", e);
  return {
    type: addWhishlistProductDetail,
    value: e,
  };
};

export const saveWhishlistProductAction = (e) => {
  return {
    type: saveWhishlistedProductDetail,
    value: e,
  };
};

export const removeProductFromWhishlistAction = (e) => {
  console.log("insiode whishlist action handler==", e);
  return {
    type: removeWhishlistProductDetail,
    value: e,
  };
};
