import { GET_PRODUCTS, GET_CART_ITEMS, ADD_USER } from "../actions/types";

/* eslint-disable import/no-anonymous-default-export */
import { LOGIN_USER } from './../actions/types';

const initialState = {
  products: [],
  cartItems: [],
  loginUser:{}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
      case LOGIN_USER:
        return {
          ...state,
          loginUser: action.payload,
        };
    default:
      return state;
  }
}
