import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Products } from "../../types/products";
import axios, { AxiosError } from "axios";

const initialState: Products[] = []

export const getAllProducts = createAsyncThunk(
    "getAllProducts",
    async () => {
        try {
            const result = await axios.get<Products[]>("https://api.escuelajs.co/api/v1/products")
            return result.data
        }catch (e) {
            const error = e as AxiosError
            if (error.request) {
                console.log("error in request ", error.request)
            }else {
                console.log(error.response?.data)
            }
        }
    }
)

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers: {
        getproducts: (state) =>{

        }
    },
    extraReducers: (build) => {
        build
      .addCase(getAllProducts.pending, (state) => {
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        if (action.payload) {
            return action.payload
        }
      })
      .addCase(getAllProducts.rejected, (state, action) => {

      })
    }
})

const productReducer = productSlice.reducer
export default productReducer