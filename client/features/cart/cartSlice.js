import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    cartInfo: {},
    orderItems: []
}

export const fetchCart = createAsyncThunk('users/fetchCart', async (id) => {
    if(id === undefined) {
        console.log('testing')
    } else {
        const { data } = await axios.get(`/api/users/${id}/cart`)
        return data 
    }
})

export const addToCart = createAsyncThunk('users/addToCart', async(newOrder) => {
    const { id, quantity, productId, orderId } = newOrder
    const { data } = await axios.post(`/api/users/${id}/cart/add`, {
        quantity,
        productId,
        orderId,
    })
    return data
})

export const removeFromCart = createAsyncThunk('users/removeFromCart', async(orderToRemove) => {
    const { id, product } = orderToRemove
    const { data } = await axios.delete(`/api/users/${id}/cart/remove`, {
        data: {
            product
        }
    })
    console.log(data)
    return data
})

export const incrementItem = createAsyncThunk('cart/incrementItem', async(itemToIncrement) => {
    const { id, product } = itemToIncrement
    console.log(product)
    const { data } = await axios.put(`/api/users/${id}/cart/increment`, {
        product
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
        }),
        builder.addCase(removeFromCart.fulfilled, (state, action) => {
            state.orderItems = action.payload
            return state
        }),
        builder.addCase(incrementItem.fulfilled, (state, action) => {
            console.log(action.payload)
            state.orderItems = action.payload
            return state
        })
    }
})

export const { deleteCartState } = cartSlice.actions
export const selectCart = (state) => state.cart 
export default cartSlice.reducer