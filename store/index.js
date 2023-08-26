import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import CR from "./reducer";
import { createWrapper } from "next-redux-wrapper";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const makeStore = () =>
  createStore(CR, composeEnhancers(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore);

//next js mai wrapper create krta h so that next js redux ko use kar payai
