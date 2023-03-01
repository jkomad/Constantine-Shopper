import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {}

export const fetchSingleUser = createAsyncThunk('users/fetchSingleUser', async (id) => {
    const { data } = await axios.get(`/api/users/${id}`)
    return data
})

export const editUser = createAsyncThunk('users/editUser', async (editedUser) => {
    const { id, username, email, address } = editedUser
    const { data } = await axios.put(`/api/users/${id}/edit`, {
        username,
        email,
        address
    })
    return data
})

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    const { data } = await axios.delete(`/api/users/${id}`)
    return data
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearUserState: (state, action) => {
            state = {}
            return state
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
            return action.payload
        }),
        builder.addCase(editUser.fulfilled, (state, action) => {
            state = action.payload
            return state
        }), 
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state = {}
            return state
        })
    }
})

export const { clearUserState } = userSlice.actions
export const selectUser = (state) => state.user
export default userSlice.reducer