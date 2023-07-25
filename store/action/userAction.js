import { SaveUserDetails } from "../types";
export const saveUserDetails = (e) => {
  return {
    type: SaveUserDetails,
    value: e,
  };
};
