import { SaveProductDetails, SaveSingleProductDetail } from "../types";
const initialValues = {
  productDetails: [],
  productCount: 0,
};
const productReducer = (state = initialValues, action) => {
  // console.log("88888888888===========", action.value);
  switch (action.type) {
    case SaveProductDetails:
      return {
        ...state,
        productDetails: [...action.value.allProducts],
        productCount: action.value.productCount,
      };
    case SaveSingleProductDetail:
      // console.log("88888888888===========", action.value);
      return {
        ...state,
        productDetails: [action.value],
      };
    default:
      return {
        ...state,
      };
  }
};
export default productReducer;
