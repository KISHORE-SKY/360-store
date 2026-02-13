import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../privateRouter/authendication/authSlice";

export const store= configureStore({
    reducer:{
        auth:authReducer,
    }
})