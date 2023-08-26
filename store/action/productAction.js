import {
  SaveProductDetails,
  SaveSingleProductDetail,
  SearchProductDetail,
} from "../types";
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

export const searchProductsAction = (e) => {
  console.log("inisde searchProductsAction==>", e);
  return {
    type: SearchProductDetail,
    value: e,
  };
};
