import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = [];

export const fetchOrderHistory = createAsyncThunk('users/fetchOrderHistory', async (id) => {
  const { data } = await axios.get(`/api/users/${id}/order`)
  console.log(data)
  return data
})

const orderHistorySlice = createSlice({
  name: 'orderHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(fetchOrderHistory.fulfilled, (state, action) => {
          return action.payload
      })
  }
})

export const selectOrderHistory = (state) => state.orderHistory
export default orderHistorySlice.reducer
