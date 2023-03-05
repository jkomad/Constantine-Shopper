import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteProductAsync } from "../singleProduct/singleProductSlice";
import { deleteProduct, fetchAllProducts, selectProducts } from "./productsSlice";

const DeleteProduct = ({ product, orderId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const productToDelete = {
      product, 
      orderId
    }
    dispatch(deleteProduct(productToDelete));
    dispatch(fetchAllProducts());
  };

  return (
    <button
      className="deleteButton"
      onClick={() => {
        handleDelete();
        // dispatch(fetchAllProducts())
      }}
    >
      Delete Product
    </button>
  );
};

export default DeleteProduct;
