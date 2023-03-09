import cartReducer from "./cart";
import isCartOpenReducer from "./isCartOpen";
import productsReducer from "./products";
import { combineReducers } from "redux";
import loadingStatesReducer from "./loadingStates";

const rootReducers = combineReducers({
    isCartOpen:isCartOpenReducer,
    products:productsReducer,
    cart:cartReducer,
    LoadingStates:loadingStatesReducer, 
})

export default rootReducers;