import { SaveUserDetails } from "../types";
const initialValues = {
  userDetail: {},
};
const userReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SaveUserDetails:
      // console.log("action value=== user======>", action.value);
      return {
        ...state,
        userDetail: { ...action.value },
      };

    default:
      return { ...state };
  }
};
export default userReducer;
