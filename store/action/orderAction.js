import {
  SaveOrderOfAUserDetail,
  SaveAllOrdersOfAUserDetail,
  SaveSingleOrderDetail,
} from "../types";
export const saveOrderOfAUser = (e) => {
  return {
    type: SaveOrderOfAUserDetail,
    value: e,
  };
};

export const saveAllOrdersOfAUserAction = (e) => {
  // console.log("jjjjjjjjjjjjjjj", e);
  return {
    type: SaveAllOrdersOfAUserDetail,
    value: e,
  };
};

export const saveOrderByIdOfAUserAction = (e) => {
  return {
    type: SaveSingleOrderDetail,
    value: e,
  };
};
