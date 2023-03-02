import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, selectProducts } from "./productsSlice";
import AddProduct from "./AddProduct";
import { Link, Routes, Route, useParams } from "react-router-dom";
import { me } from "../auth/authSlice";
import { deleteProductAsync } from "../singleProduct/singleProductSlice";
import DeleteProduct from "./DeleteProduct";

const Products = () => {
  const products = useSelector(selectProducts);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log(me);

  return (
    <div>
      <Link to="/products/add">Add a Product</Link>
      <h1>All Products:</h1>
      {products.map((product) => (
        <div key={product.id} className="productContainer">
          <img src={product.imgUrl}></img>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
          <h4>{`$${product.price}`}</h4>
          <h4>{product.description}</h4>
          <button>add to cart</button>
          {isAdmin ? <DeleteProduct product={product}>REMOVE PRODUCT</DeleteProduct> : <></>}
        </div>
      ))}
    </div>
  );
};

export default Products;
