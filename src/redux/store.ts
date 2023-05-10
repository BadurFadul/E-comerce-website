import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/usersReducer";

const store = configureStore({
    reducer: {
        productReducer,
        userReducer
    }
})

export default store