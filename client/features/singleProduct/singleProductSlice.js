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

export const editProductAsync = createAsyncThunk(
  "products/:id/edit",
  async ({ id, name, price, description, imgUrl }) => {
    const { data } = await axios.put(`/api/products/${id}`, {
      name,
      price,
      description,
      imgUrl,
    });
    return data;
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
    builder.addCase(editProductAsync.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.price = action.payload.price;
      state.description = action.payload.description;
      state.imgUrl = action.payload.imgUrl;
    });
  },
});

export const selectSingleProduct = (state) => {
  return state.singleProduct;
};

export default singleProductSlice.reducer;
