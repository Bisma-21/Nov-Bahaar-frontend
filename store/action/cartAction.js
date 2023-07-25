import {
  SaveProductToAddToCartDetail,
  GeTCartProductsOfAUserDetail,
  IncrementCartProductOfAUserDetail,
  DecrementCartProductOfAUserDetail,
  UpdateCartOnOrderCreateDetail,
  removeProductFromCartDetail,
} from "../types";

export const saveProductToAddToCartAction = (e) => {
  return {
    type: SaveProductToAddToCartDetail,
    value: e,
  };
};

export const getCartOfSingleUserAction = (e) => {
  return {
    type: GeTCartProductsOfAUserDetail,
    value: e,
  };
};

export const incrementCartProductOfAUserAction = (e, id) => {
  // console.log("eeeeeeee=>", e);
  // console.log("id===============>", id);
  return {
    type: IncrementCartProductOfAUserDetail,
    value: e,
    pId: id,
  };
};

export const decrementCartProductOfAUserAction = (e, id) => {
  console.log("eeeeeeee=>", e);
  console.log("id===============>", id);
  return {
    type: IncrementCartProductOfAUserDetail,
    value: e,
    pId: id,
  };
};

export const updateCartOnOrderCreateAction = (e) => {
  return {
    type: UpdateCartOnOrderCreateDetail,
    value: e,
  };
};

export const removeProductFromCartAction = (e) => {
  console.log("removeProductFromCartAction= action888==", e);

  return {
    type: removeProductFromCartDetail,
    value: e,
  };
};
