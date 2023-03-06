import "../styles/Cart.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllProducts, selectProducts } from "../products/productsSlice";
import { selectCart, fetchCart, addToCart } from "./cartSlice";
import { selectMe } from "../auth/authSlice";

const Cart = () => {
  const user = useSelector(selectMe);
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart);
  const { id } = useParams();
  const { cartInfo, orderItems } = cart;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart(user.id));
    dispatch(fetchAllProducts());
  }, [dispatch, user]);
  

  const handleQtyChange = (event, productId) => {
    const newOrder = {
        id: user.id,
        quantity: 1,
        productId,
        orderId: cartInfo.id, 
      }
    orderItems.forEach((cartItem) => {
      if (cartItem.id === productId) {
        cartItem.quantity = event.target.value;
        newOrder.quantity = cartItem.quantity
        console.log(newOrder.quantity)
      }
    });

    dispatch(addToCart(newOrder)).then(dispatch(fetchCart(user.id)));
  };

  const checkout = (order) => {
    const itemsToCheckout = [];
    let i = 0;
    for (let j = 0; j < products.length; j++) {
      if (i > order.length - 1) break;
      if (order[i].productId === products[j].id) {
        itemsToCheckout.push({
          product: products[j],
          quantity: order[i].quantity,
        });
        i++;
        j = -1;
        continue;
      }
    }
    console.log(itemsToCheckout)
    return itemsToCheckout;
  };
  const itemsToCheckout = checkout(orderItems);

  return (
    <div>
      <h1 className="cart-header">{user.username}'s Cart</h1>
      <div className="productsBody">
        {itemsToCheckout.map((item) => {
          return (
            <div key={item.product.id} className="container">
              <div className="productContainer">
                <img src={item.product.imgUrl} className="productImg" />
                <div className="productInfo">
                  <a>
                    {`(${item.quantity})`} {item.product.name}
                  </a>
                  <p>{item.product.price}</p>
                  <p>{item.product.description}</p>
                </div>
              </div>
              <div className="ui">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(event) => handleQtyChange(event, item.product.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="total-price">
        Total: ${!cartInfo.total ? 0 : cartInfo.total}
      </h1>
    </div>
  );
};

export default Cart;
