import {
  GetAllReviewOfAProductDetail,
  CreateReviewOfAProductDetail,
} from "../types";

export const getAllReviewOfAProductAction = (e) => {
  return {
    type: GetAllReviewOfAProductDetail,
    value: e,
  };
};
export const createReviewOfAProductAction = (e) => {
  console.log("11111===R=A", e);
  return {
    type: CreateReviewOfAProductDetail,
    value: e,
  };
};
