import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {
    const data = await axios.get('/api/users')
    return data
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectUsers = (state) => state.users
export default usersSlice.reducer