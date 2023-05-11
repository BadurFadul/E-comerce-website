import { createSlice } from "@reduxjs/toolkit";

interface card {
    id: number

}

const initialState: card[] = []

const cardSlice = createSlice({
    name:"cardlist",
    initialState,
    reducers: {

    }
})

const cardReducer = cardSlice.reducer
export default cardReducer