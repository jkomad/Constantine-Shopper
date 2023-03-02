import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {}

export const fetchCart = createAsyncThunk('users/fetchCart', async (id) => {
    const { data } = await axios.get(`/api/users/${id}/cart`)
    console.log(data)
    return data 
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectCart = (state) => state.cart 
export default cartSlice.reducer