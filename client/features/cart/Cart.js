import "../styles/Cart.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchAllProducts, selectProducts } from "../products/productsSlice";
import { selectCart, fetchCart, addToCart, removeFromCart, incrementItem } from "./cartSlice";
import { selectMe } from "../auth/authSlice";
import Payment from "./Payment";
import Modal from "./Modal";


const Cart = () => {    
    const [isOpen, setIsOpen] = useState(false);
    const [productRemoved, setProductRemoved] = useState(false)
    const { id } = useParams()
    const user = useSelector(selectMe)
    const products = useSelector(selectProducts)
    const cart = useSelector(selectCart)
    const { cartInfo, orderItems } = cart
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchCart(user.id))
        dispatch(fetchAllProducts())
    }, [dispatch, user])

    useEffect(() => {
        dispatch(fetchCart(user.id))
        setProductRemoved(false)
    }, [productRemoved])

    const handleRemoveProduct = (item) => {
        const { product } = item
        const orderToRemove = {
            id,
            product
        }
        setProductRemoved(true)
        dispatch(removeFromCart(orderToRemove))
    }

    const handleIncrementItem = (item) => { 
        const { product } = item
        const itemToIncrement = {
            id,
            product
        }
        dispatch(incrementItem(itemToIncrement))
    }
    
    const checkout = (order) => {
        const itemsToCheckout = []
        let i = 0
        for (let j = 0; j < products.length; j++) {
            if(i > order.length-1) break
            if(order[i].productId === products[j].id) {
                itemsToCheckout.push({
                    product: products[j], 
                    quantity: order[i].quantity
                })
                i++
                j=-1
                continue
            }
        }
        return itemsToCheckout
    }
    const itemsToCheckout = checkout(orderItems)

  return (
    <div>
      <h1 className="cart-header">{user.username}'s Cart</h1>
      <div className="cartBody">
        {itemsToCheckout.map((item) => {
          return (
            <div key={item.product.id} className="container">
              <div className="cartContainer">
                <img src={item.product.imgUrl} className="productImg" />
                <div className="cartInfo">
                  <a>
                    {`(${item.quantity})`}{item.product.name}
                  </a>
                  <p>{`Price: $${item.product.price}.00`}</p>
                  {/* <p>{item.product.description}</p> */}
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
      {!cartInfo.total ? (
        0
      ) : (
        <>
          <button onClick={() => setIsOpen(true)}>PROCEED TO CHECKOUT</button>
          {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
      )}
    </div>
  );
};

export default Cart;
