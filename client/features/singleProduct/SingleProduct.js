import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSingleProduct, fetchSingleProduct } from "./singleProductSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(selectSingleProduct);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      <img src={product.imgUrl} />
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <h3>{product.description}</h3>
    </div>
  );
};

export default SingleProduct;
