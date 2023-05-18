import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/usersReducer";
import cardReducer from "./reducers/card";

const store = configureStore({
    reducer: {
        productReducer,
        userReducer,
        cardReducer
    }
})

export type GlobalState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store