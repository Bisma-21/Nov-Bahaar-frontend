import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
import whishlistReducer from "./whishlistReducer";
import reviewReducer from "./reviewReducer";
const CR = combineReducers({
  users: userReducer,
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
  whishlist: whishlistReducer,
  review: reviewReducer,
});

export default CR;
