import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Products } from "../../types/products";
import { CreateProduct } from "../../types/createProduct";
import axios, { AxiosError } from "axios";

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
    "getProductById", async (productId: number) => {
        try {         
            const result = await axios.get<Products>(`https://api.escuelajs.co/api/v1/products/${productId}`)
            return result.data
        }catch (e) {
            const error = e as AxiosError
            return error
        }
    }
)

export const createProduct = createAsyncThunk(
    "createProduct", async (product: Products) => {
        try {         
            const result = await axios.post<Products>(`https://api.escuelajs.co/api/v1/products/`, product)
            return result.data
        }catch (e) {
            const error = e as AxiosError
            return error
        }
    }
)

export const updateProduct = createAsyncThunk(
    "updateProduct", async (product: Products) => {
        try {         
            const result = await axios.put<Products>(`https://api.escuelajs.co/api/v1/products/${product.id}`, product)
            return result.data
        }catch (e) {
            const error = e as AxiosError
            return error
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
      }
    },
    extraReducers: (build) => {
        build

      .addCase(getAllProducts.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError) {
            state.error = action.payload.message
        }else {
           state.products = action.payload
        }
        state.loading = false
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        if(action.payload instanceof AxiosError) {
            state.error = action.payload.message
        }else { 
            state.products.push(action.payload)
        }
      })

      .addCase(createProduct.rejected, (state, action) => {
        state.error = "Cannot fetch data"
      })
      
      .addCase(updateProduct.fulfilled, (state, action) => {
        if(action.payload instanceof AxiosError) {
            state.error = action.payload.message
        }else { 
            const product = state.products.map(product => {
          
            })
        }
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.error = "Cannot fetch data"
      })
      .addCase(getAllProducts.pending, (state, action) => {
        state.loading =true
      })
    }
})

const productReducer = productSlice.reducer
export const {sortByCategory, sortByPrice} = productSlice.actions
export default productReducer