import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

export const fetchAllProducts = createAsyncThunk(
  "products",
  async () => {
    try {
      const { data } = await axios.get(`/api/products`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const addProduct = createAsyncThunk(
  "addproduct",
  async ({ name, price, description, imgUrl}) => {
    try {
      const { data } = await axios.post(`/api/products`, {
        name: name,
        price: price,
        description: description,
        imgUrl: imgUrl
      })
      console.log(data)
      return data
    } catch (err) {
      console.log(err)
    }
  }
)

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      console.log(action.payload)
      state.push(action.payload);
    });
  },
});

export const selectProducts = (state) => {
  return state.products};

export default productsReducer.reducer;
