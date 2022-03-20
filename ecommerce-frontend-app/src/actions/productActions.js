import axios from "axios";
import { GET_ERRORS, GET_PRODUCTS, GET_CART_ITEMS, LOGIN_USER } from "./types";

export const getAllProducts = () => async (dispatch) => {
  const res = await axios.get("/products/getAllProducts");
  dispatch({
    type: GET_PRODUCTS,
    payload: res.data,
  });
};

export const getAllCartItems = () => async (dispatch) => {
  const res = await axios.get("cart/getAllCartItems");
  dispatch({
    type: GET_CART_ITEMS,
    payload: res.data,
  });
};

export const addProductIntoCart = (id, history) => async (dispatch) => {
  try {
    await axios.post(`cart/addIntoCart/${id}`);
    history.push("/allCartItems");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const addUser = (user) => async (dispatch) => {
  try {
    await axios.post("user/addUser", user);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const login = (emailID, history) => async (dispatch) => {
  const res = await axios.get(`user/login/${emailID}`);
  dispatch({
    type: LOGIN_USER,
    payload: res.data,
  });
  if (res.data === true) {
    history.push("/allProducts");
  } else {
    window.alert("login again");
  }
};
