import { render } from "react-dom";
import {
  SaveProductToAddToCartDetail,
  GeTCartProductsOfAUserDetail,
  IncrementCartProductOfAUserDetail,
  DecrementCartProductOfAUserDetail,
  UpdateCartOnOrderCreateDetail,
  removeProductFromCartDetail,
} from "../types";

const initialValues = {
  cartDetails: {},
};
const cartReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SaveProductToAddToCartDetail:
      const data = action.value;
      return {
        ...state,
        cartDetails: data,
      };
    case GeTCartProductsOfAUserDetail:
      // console.log("action value=== cart======>", action.value);
      const value = action.value;
      return {
        ...state,
        cartDetails: value,
      };
    case IncrementCartProductOfAUserDetail:
      // console.log("inside cart action ==============>", action.value);
      // console.log("inside crat 2nd action ==============>", action.pId);
      let savedData = { ...state.cartDetails };
      // console.log("saved data============>", savedData.products);
      const updatedData = action.value?.find((e) => e.pId._id == action.pId);
      // console.log("updated array================>", updatedData);
      // const previousData = action.value.filter((e) => e.pId._id != action.pId);
      // console.log("previousData array================>", previousData);
      const i = savedData.products.findIndex((e) => e.pId._id == action.pId);
      // console.log("iiiiiiiiiiiii", i);
      savedData.products.splice(i, 1, updatedData);
      // console.log("222222222222222sumUpData===========", savedData);
      return {
        ...state,
        cartDetails: { ...savedData },
      };
    case DecrementCartProductOfAUserDetail:
      // console.log("inside cart action ==============>", action.value);
      // console.log("inside crat 2nd action ==============>", action.pId);
      return {
        ...state,
      };
    case UpdateCartOnOrderCreateDetail:
      const emptyCart = action.value;
      return {
        ...state,
        cartDetails: { emptyCart },
      };

    case removeProductFromCartDetail:
      console.log(" cart product delete action ==============>", action.value);
      // const emptyProductFromCart = action.value;
      return {
        ...state,
        cartDetails: action.value,
      };
    default:
      return {
        ...state,
      };
  }
};
export default cartReducer;
