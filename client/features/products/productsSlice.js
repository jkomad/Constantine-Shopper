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
      return data
    } catch (err) {
      console.log(err)
    }
  }
)

export const deleteProduct = createAsyncThunk(
  "products/:id/delete",
  async (productToDelete) => {
    const { product, orderId } = productToDelete
    const { data } = await axios.delete(`/api/products/${product.id}`);
    return data;
  }
);

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const newState = state.filter(
        (product) => product.id !== action.payload.id
      );
      return newState;
    });
  },
});

export const selectProducts = (state) => {
  return state.products};

export default productsReducer.reducer;
