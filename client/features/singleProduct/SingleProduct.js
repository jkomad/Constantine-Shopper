import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  selectSingleProduct,
  fetchSingleProduct,
  deleteProductAsync,
} from "./singleProductSlice";
import EditProductForm from "./EditProductForm";
import { fetchAllProducts } from "../products/productsSlice";
import { addToCart, fetchCart, selectCart } from "../cart/cartSlice";

const SingleProduct = () => {
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const user = useSelector((state) => state.auth.me)
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useSelector(selectSingleProduct);
  const cart = useSelector(selectCart)
  const { cartInfo, orderItems } = cart

  const [showEditForm, setShowEditForm] = useState(false);
  const [addedItem, setAddedItem] = useState(false)

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchCart(user.id))
    setAddedItem(false)
  }, [user, addedItem])

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

  const handleAddToCart = () => {
    const newOrder = {
      id: user.id,
      quantity: 1,
      productId: product.id,
      orderId: cartInfo.id, 
    }
    dispatch(addToCart(newOrder))
    setAddedItem(true)
    navigate(`/users/${user.id}/cart`)
  }

  return (
    <div>
      {isAdmin ? (<div>
        <Link className="exit" to="/products">X</Link>
      <div>
        <img src={product.imgUrl} />
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <h3>{product.description}</h3>
      {!showEditForm && <button onClick={handleEditClick}>Edit Product</button>}
      {showEditForm && (
        <EditProductForm product={product} onSubmit={handleEditSubmit} />
      )}
      <button onClick={() => handleAddToCart()}>Add to cart</button>
      <button onClick={() => handleDelete()}>Delete</button>
      </div>
      </div>):(
      <div>
    <Link className="exit" to="/products">X</Link>
    <div>
      <img src={product.imgUrl} />
    <h1>{product.name}</h1>
    <h2>{product.price}</h2>
    <h3>{product.description}</h3>
    <button onClick={() => handleAddToCart()}>Add to cart</button>
    </div>
    </div>)}
    </div>
  );
};

export default SingleProduct;
