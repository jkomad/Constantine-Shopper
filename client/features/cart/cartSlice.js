import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    cartInfo: {},
    orderItems: []
}

export const fetchCart = createAsyncThunk('users/fetchCart', async (id) => {
    const { data } = await axios.get(`/api/users/${id}/cart`)
    return data 
})

export const addToCart = createAsyncThunk('users/addToCart', async(newOrder) => {
    console.log(newOrder)
    const { id, quantity, productId, orderId, price } = newOrder
    const { data } = await axios.post(`/api/users/${id}/cart/add`, {
        quantity,
        productId,
        orderId,
    })
    return data
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCartState: (state, action) => {
            state = {}
            return state
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            return action.payload
        }),
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.orderItems.push(action.payload)
            return state
        })
    }
})

export const { deleteCartState } = cartSlice.actions
export const selectCart = (state) => state.cart 
export default cartSlice.reducer