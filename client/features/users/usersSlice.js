import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {
    const { data } = await axios.get('/api/users')
    return data
})

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    const { data } = await axios.delete(`/api/users/${id}`)
    console.log(data)
    return data
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        }),
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.splice(action.payload.id-1, 1)
            return state
        })
    }
})

export const selectUsers = (state) => state.users
export default usersSlice.reducer