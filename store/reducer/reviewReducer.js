import {
  GetAllReviewOfAProductDetail,
  CreateReviewOfAProductDetail,
} from "../types";
const initialValues = {
  allReview: {},
};
const reviewReducer = (state = initialValues, action) => {
  switch (action.type) {
    case GetAllReviewOfAProductDetail:
      //   console.log("xxxxxxxxxxxxx");
      return {
        ...state,
        allReview: action.value,
      };
    case CreateReviewOfAProductDetail:
      console.log("xxxxxxxxxxxxx", action.value);
      const data = action.value;
      return {
        ...state,
        allReview: [...state.allReview, data],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reviewReducer;
