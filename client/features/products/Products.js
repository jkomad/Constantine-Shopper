import "../styles/Products.css";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, selectProducts } from "./productsSlice";
import AddProduct from "./AddProduct";
import { Link, Routes, Route, useParams, useNavigate } from "react-router-dom";
import { me } from "../auth/authSlice";
import { deleteProductAsync } from "../singleProduct/singleProductSlice";
import DeleteProduct from "./DeleteProduct";
import { fetchCart, addToCart, selectCart } from "../cart/cartSlice";

const Products = () => {
  const products = useSelector(selectProducts);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const user = useSelector((state) => state.auth.me)
  const cart = useSelector(selectCart)
  const { cartInfo, orderItems } = cart

  const [addedItem, setAddedItem] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchCart(user.id))
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCart(user.id))
  }, [user, addedItem])

  const handleAddToCart = (productId) => {
    const newOrder = {
      id: user.id,
      quantity: 1,
      productId,
      orderId: cartInfo.id, 
    }
    dispatch(addToCart(newOrder))
    setAddedItem(true)
  }

  return (
    <>
      <h1>All Products:</h1>
      {isAdmin ? <Link to="/products/add">Add a Product</Link> : ""}
      <div className="productsBody">
        {products.map((product) => (
          <div key={product.id} className="productContainer">
            <img className="productImg" src={product.imgUrl}></img>
            <div className="productInfo">
              <Link to={`/products/${product.id}`}>{product.name}</Link>
              <p className="margin2px">{`$${product.price}`}</p>
              <p className="margin2px italic">{product.description.charAt(0).toUpperCase()+product.description.slice(1)}</p>
              <button onClick={() => handleAddToCart(product.id)}>add to cart</button>
              {isAdmin ? (
              <DeleteProduct className="deleteButton" product={product}>REMOVE PRODUCT</DeleteProduct>
            ) : (
              ""
            )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
