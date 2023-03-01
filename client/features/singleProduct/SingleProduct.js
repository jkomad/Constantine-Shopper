import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSingleProduct, fetchSingleProduct } from "./singleProductSlice";
import EditProductForm from "./EditProductForm";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(selectSingleProduct);

  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  const handleEditSubmit = () => {
    setShowEditForm(false);
  }

  const handleEditClick = () => {
    setShowEditForm(true);
  }

  return (
    <div>
      <img src={product.imgUrl} />
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <h3>{product.description}</h3>
      {!showEditForm && (
        <button onClick={handleEditClick}>
          Edit Product
        </button>
      )}
      {showEditForm && (
        <EditProductForm product={product} onSubmit={handleEditSubmit} />
      )}
    </div>
  );
};

export default SingleProduct;
