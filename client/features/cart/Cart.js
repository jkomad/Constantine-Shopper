import '../styles/Cart.css'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAllProducts, selectProducts } from '../products/productsSlice'
import { selectCart, fetchCart, removeFromCart, incrementItem } from './cartSlice'
import { selectMe } from '../auth/authSlice'

const Cart = () => {    
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

    const handleRemoveProduct = (item) => {
        const { product } = item
        const orderToRemove = {
            id,
            product
        }
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
            <h1 className='cart-header'>{user.username}'s Cart</h1>
            <div className='productsBody'>
            {itemsToCheckout.map((item) => {
                return (
                    <div key={item.product.id} className='container'>
                    <div className='productContainer'>
                        <img src={item.product.imgUrl} className='productImg'/>
                        <div className='productInfo'>
                            <a>{`(${item.quantity})`} {item.product.name}</a>
                            <p>${item.product.price}</p>
                            <p>{item.product.description}</p>
                        </div>
                    </div>
                    <div className='ui'>
                        <button>-</button>
                        <button onClick={() => handleIncrementItem(item)}>+</button>
                        <button onClick={() => handleRemoveProduct(item)}>Remove Product</button>
                    </div>
                    </div>
                )
            })}
      </div>
      {!cartInfo.total ? 
      <h1 className="total-price">Cart is Empty</h1>
      :
      <>
      <h1 className="total-price">Total: ${cartInfo.total}</h1>
          <button onClick={() => setIsOpen(true)}>Show Payment Modal</button>
          {isOpen && <Modal setIsOpen={setIsOpen} />}
      </>
      }
    </div>
  );
};

export default Cart