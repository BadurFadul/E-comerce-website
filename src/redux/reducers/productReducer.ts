import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Products } from "../../types/products";
import axios, { AxiosError } from "axios";


const initialState: Products[] = []

export const getAllProducts = createAsyncThunk(
    "getAllProducts",
    async () => {
        try {         
            const result = await axios.get<Products[]>("https://api.escuelajs.co/api/v1/products")
            console.log(result.data)
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

export const getProductById = createAsyncThunk(
    "getProductById", async (productId: number) => {
        try {         
            const result = await axios.get<Products>(`https://api.escuelajs.co/api/v1/products/${productId}`)
            console.log(result.data)
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
      sortByCategory: (state, action:PayloadAction<"asc"|"desc">) => {
        if (action.payload === "asc") {
            state.sort((a,b) => a.category.name.localeCompare(b.category.name))
        }else {
            state.sort((a,b) => b.category.name.localeCompare(a.category.name))
        }
      },
      sortByPrice: (state) => {
        state.sort((a,b) => a.price - b.price)
      }
    },
    extraReducers: (build) => {
        build

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
const {sortByCategory} = productSlice.actions
export default productReducer