import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { Users } from "../../types/users";
import { Login } from "../../types/login";



const initialState: {
    users: Users[],
    loading: boolean,
    error: string
} = {
    users:[],
    loading: false,
    error: ""
}


export const createUser = createAsyncThunk(
    "users/createUser",  
    async (obj: Users, { rejectWithValue }) => {
        try {         
            const result = await axios.post<Users>("https://api.escuelajs.co/api/v1/users/", obj)
            return result.data
            
        }catch (e) {
            const error = e as AxiosError
            // Return only the error message not the whole AxiosError object
            return rejectWithValue(error.message)
        }
    }
)

export const UserLogin = createAsyncThunk(
    "users/UserLogin",  
    async (obj: Login, { rejectWithValue }) => {
        try {         
            const result = await axios.post<Login>("https://api.escuelajs.co/api/v1/auth/login", obj)
            console.log(result.data)
            return result.data
        }catch (e) {
            const error = e as AxiosError
            // Return only the error message not the whole AxiosError object
            return rejectWithValue(error.message)
        }
    }
)

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers: (build) => {
        build
        .addCase(createUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(createUser.fulfilled, (state, action) => {
            // Check if the payload is a string (error message)
            if(typeof action.payload === "string") {
                state.error = action.payload
            } else { 
                state.users.push(action.payload)
            }
            state.loading = false;
        })
        .addCase(createUser.rejected, (state, action) =>{
            state.error = action.error.message || "Cannot fetch data"
            state.loading = false;
        })
    }
})

const userReducer = userSlice.reducer
export default userReducer