import {
  addWhishlistProductDetail,
  removeWhishlistProductDetail,
  saveWhishlistedProductDetail,
} from "../types";
const initialValues = {
  whishlistDetails: [],
};
const whishlistReducer = (state = initialValues, action) => {
  switch (action.type) {
    case addWhishlistProductDetail:
      console.log("insde add  whishlist reducer", action.value);
      const data = action?.value?.saveProducts;
      console.log("dataaaaa===>", data);
      return {
        ...state,
        whishlistDetails: data,
      };
    case saveWhishlistedProductDetail:
      //   console.log("insde save whishlist reducer", action.value);
      return {
        ...state,
        whishlistDetails: action.value,
      };
    case removeWhishlistProductDetail:
      console.log("insde remove whishlist reducer", action.value);
      const wData = action?.value?.saveProducts;
      return {
        ...state,
        whishlistDetails: wData,
      };
    default:
      return {
        ...state,
      };
  }
};
export default whishlistReducer;
