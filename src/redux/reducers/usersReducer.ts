import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../../types/users";

const initialState: Users[] = []
const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{

    }
})

const userReducer = userSlice.reducer
export default userReducer