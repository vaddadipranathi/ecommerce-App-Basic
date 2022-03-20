import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";

export default combineReducers({
  products: productReducer,
  errors: errorReducer,
});
