import { products } from "./listProducts";
import { combineReducers } from "redux";
import { cart } from "./cart"
import { countUp } from "./count"
import { message } from './message';

export const appReducer = combineReducers({
    products,
    cart,
    countUp,
    message
})