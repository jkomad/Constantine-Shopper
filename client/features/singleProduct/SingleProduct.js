import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  selectSingleProduct,
  fetchSingleProduct,
  deleteProductAsync,
} from "./singleProductSlice";
import EditProductForm from "./EditProductForm";
import { fetchAllProducts } from "../products/productsSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useSelector(selectSingleProduct);

  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  const handleEditSubmit = () => {
    setShowEditForm(false);
  };

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleDelete = () => {
    dispatch(deleteProductAsync(id))
      .then(navigate("/products"))
      .then(dispatch(fetchAllProducts()));
  };

  return (
    <div>
      <img src={product.imgUrl} />
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <h3>{product.description}</h3>
      {!showEditForm && <button onClick={handleEditClick}>Edit Product</button>}
      {showEditForm && (
        <EditProductForm product={product} onSubmit={handleEditSubmit} />
      )}
      <button>Add to cart</button>
      <button onClick={() => handleDelete()}>Delete</button>
    </div>
  );
};

export default SingleProduct;
