import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchSingleProduct = createAsyncThunk(
  "products/:id",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleProduct = (state) => {
  return state.singleProduct;
};

export default singleProductSlice.reducer;
