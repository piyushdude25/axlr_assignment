import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import { productsReducer } from "./Reducer/productReducer";

import { createStore, applyMiddleware } from "redux";
import { loginUserReducer } from "./reducer/userReducer";

const finalReducer = combineReducers({
  loginUserReducer: loginUserReducer,
  //   productsReducer: productsReducer,
});

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
