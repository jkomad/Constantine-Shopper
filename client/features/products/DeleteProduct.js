import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteProductAsync } from "../singleProduct/singleProductSlice";
import { deleteProduct, fetchAllProducts, selectProducts } from "./productsSlice";
import { DeleteProductButton } from "../../styles/product";
const DeleteProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
    dispatch(fetchAllProducts());
  };

  return (
    <DeleteProductButton
      onClick={() => {
        handleDelete();
        // dispatch(fetchAllProducts())
      }}
    >
      Delete Product
    </DeleteProductButton>
  );
};

export default DeleteProduct;
