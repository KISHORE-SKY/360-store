import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../privateRouter/authendication/authSlice";
import cartReducer from "../privateRouter/authendication/productSlice"

export const store= configureStore({
    reducer:{
        auth:authReducer,
        product: cartReducer,
    }
})