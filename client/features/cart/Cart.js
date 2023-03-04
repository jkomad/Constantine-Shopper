import '../styles/Cart.css'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAllProducts, selectProducts } from '../products/productsSlice'
import { selectCart, fetchCart } from './cartSlice'
import { selectMe } from '../auth/authSlice'

const Cart = () => {    
    const user = useSelector(selectMe)
    const products = useSelector(selectProducts)
    const cart = useSelector(selectCart)
    const { id } = useParams()
    const { cartInfo, orderItems } = cart
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchCart(id))
        dispatch(fetchAllProducts())
    }, [dispatch, user])
    
    const checkout = (order) => {
        const itemsToCheckout = []
        let i = 0
        for (let j = 0; j < products.length; j++) {
            if(i > order.length-1) break
            if(order[i].productId === products[j].id) {
                itemsToCheckout.push(products[j])
                i++
                j=-1
                continue
            }
        }
        console.log(itemsToCheckout)
        return itemsToCheckout
    }
    const itemsToCheckout = checkout(orderItems)

    const calculateTotal = (order) => {
        const total = order.reduce((acc, cv) => {
            return acc+cv.price
        }, 0)
        return total
    }

    const total = calculateTotal(itemsToCheckout)

    return (
        <div>
            <h1>Your Cart</h1>
            <div className='productsBody'>
            {itemsToCheckout.map((item) => {
                return (
                    <div key={item.id} className='productContainer'>
                        <img src={item.imgUrl} className='productImg'/>
                        <div className='productInfo'>
                            <a>{item.name}</a>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                )
            })}
            </div>
            <h1 className='total-price'>Total: ${total}.00</h1>
        </div>
    )
}

export default Cart