import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../../redux/reducers/productReducer";
import userReducer from "../../redux/reducers/usersReducer";
import cardReducer from "../../redux/reducers/card";


const store = configureStore({
    reducer: {
        productReducer,
        userReducer,
        cardReducer
    }
})

export default store