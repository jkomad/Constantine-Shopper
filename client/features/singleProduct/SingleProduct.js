import "../styles/Products.css";
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
  const user = useSelector((state) => state.auth.me);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useSelector(selectSingleProduct);
  const cart = useSelector(selectCart);
  const { cartInfo, orderItems } = cart;

  const [showEditForm, setShowEditForm] = useState(false);
  const [addedItem, setAddedItem] = useState(false);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchCart(user.id));
    setAddedItem(false);
  }, [user, addedItem]);

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

  const handleChange = (evt) => {
    setQty(evt.target.value);
  };

  const handleAddToCart = (qty) => {
    if (qty <= 0) {
      return;
    }
    const newOrder = {
      id: user.id,
      quantity: qty,
      productId: product.id,
      orderId: cartInfo.id,
    };
    dispatch(addToCart(newOrder));
    setAddedItem(true);
  };

  return (
    <div className="productBody">
      {isAdmin ? (
        <div>
          <Link className="exit" to="/products">
            X
          </Link>
          <div className="productContainer">
            <img src={product.imgUrl} />
            <h2>{product.name}</h2>
            <h4>{`Price: $${product.price}.00`}</h4>
            <p>{product.description}</p>
            {!showEditForm && (
              <button onClick={handleEditClick}>Edit Product</button>
            )}
            {showEditForm && (
              <EditProductForm product={product} onSubmit={handleEditSubmit} />
            )}
            <form onSubmit={() => handleAddToCart(qty)}>
              <input
                type="number"
                onChange={handleChange}
                placeholder="Qty"
                defaultValue="1"
                min="1"
              ></input>
              <button type="submit">Add to cart</button>
            </form>
            <button onClick={() => handleDelete()}>Delete</button>
          </div>
        </div>
      ) : (
        <div className="productBody">
          {/* <Link to="/products">
            Back to Products
          </Link> */}
          <div className="productContainer">
            <img src={product.imgUrl} />
            <h2>{product.name}</h2>
            <h4>{`Price: $${product.price}.00`}</h4>
            <p>{product.description}</p>
            <form onSubmit={() => handleAddToCart(qty)}>
              <input
                type="number"
                onChange={handleChange}
                placeholder="Qty"
                defaultValue="1"
                min="1"
              ></input>
              <button type="submit">Add to cart</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
