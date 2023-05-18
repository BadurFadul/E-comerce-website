import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { Products } from "../../types/Products";
import { CreateProduct } from "../../types/CreateProduct";
import { UpdateProduct } from "../../types/UpdateProduct.";



//const initialState: Products[] = []

const initialState: {
    products: Products[],
    loading: boolean,
    error: string
} = {
    products:[],
    loading: false,
    error: ""
}

export const getAllProducts = createAsyncThunk(
    "getAllProducts",
    async () => {
        try {         
            const result = await axios.get<Products[]>("https://api.escuelajs.co/api/v1/products")
            return result.data
        }catch (e) {
            const error = e as AxiosError
            return error
        }
    }
)

export const getProductById = createAsyncThunk(
    "getProductById", async (productId: number, { rejectWithValue}) => {
        try {         
            const result = await axios.get<Products>(`https://api.escuelajs.co/api/v1/products/${productId}`)
            return result.data
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.message)
        }
    }
)

export const createProduct = createAsyncThunk(
    "createProduct", async (product: CreateProduct, { rejectWithValue}) => {
        try {         
            const result = await axios.post<Products>(`https://api.escuelajs.co/api/v1/products/`, product)
            return result.data
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.message)
        }
    }
)

export const updateProduct = createAsyncThunk(
    "updateProduct", async (product: UpdateProduct, { rejectWithValue}) => {
        try {         
            const result = await axios.put<Products>(`https://api.escuelajs.co/api/v1/products/${product.id}`, product)
            console.log(result.data)
            return result.data
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.message)
        }
    }
)

export const DeleteProduct = createAsyncThunk(
    "DeleteProduct", async (id: number, { rejectWithValue}) => {
        try {         
            const result = await axios.delete<Products>(`https://api.escuelajs.co/api/v1/products/${id}`, )
            console.log(result.data)
            return result.data
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.message)
        }
    }
)

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers: {
      sortByCategory: (state, action:PayloadAction<"asc"|"desc">) => {
        if (action.payload === "asc") {
            state.products.sort((a,b) => a.category.name.localeCompare(b.category.name))
        }else {
            state.products.sort((a,b) => b.category.name.localeCompare(a.category.name))
        }
      },
      sortByPrice: (state, actoion: PayloadAction<"low"|"high">) => {
        if (actoion.payload === "low") {
            state.products.sort((a,b) => a.price - b.price)
        }else {
            state.products.sort((a,b) => b.price - a.price)
        }  
      },
    },
    extraReducers: (build) => {
        build
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false
                state.error = "Cannot fetch data"
            })
            .addCase(getAllProducts.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                if (action.payload instanceof AxiosError) {
                    state.error = action.payload.message
                }else {
                state.products = action.payload
                }
                state.loading = false
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                if(typeof action.payload === "string") {
                    state.error = action.payload
                }else { 
                    state.products.push(action.payload)
                }
            })

            .addCase(createProduct.rejected, (state, action) => {
                state.error = "Cannot post data"
            })
            
            .addCase(updateProduct.fulfilled, (state, action) => {
                if(typeof action.payload === "string") {
                    state.error = action.payload
                } else {
                    state.products = state.products.map((product) => {
                        if(product.id === action.payload.id) {
                            return action.payload
                        } else {
                            return product
                        }
                    })
                }
            })

            .addCase(DeleteProduct.fulfilled, (state, action) => {
                if(typeof action.payload === "string") {
                    state.error = action.payload
                } else{
                    state.products = state.products.filter(product => 
                        product.id !== action.payload.id)
                }
            })
        }
    })

const productReducer = productSlice.reducer
export const {sortByCategory, sortByPrice} = productSlice.actions
export default productReducer