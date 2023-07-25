import { SaveProductDetails, SaveSingleProductDetail } from "../types";
export const saveProductDetailAction = (e) => {
  return {
    type: SaveProductDetails,
    value: e,
  };
};
export const saveProductById = (e) => {
  return {
    type: SaveSingleProductDetail,
    value: e,
  };
};
