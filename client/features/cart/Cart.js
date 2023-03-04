import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAllProducts, selectProducts } from '../products/productsSlice'
import { selectCart, fetchCart } from './cartSlice'

const Cart = ({user}) => {    
    const cart = useSelector(selectCart)
    const { id } = useParams()
    const { cartInfo, orderItems } = cart

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCart(id))
    }, [user])

    return (
        <div>
            <h1>Your Cart</h1>
        </div>
    )
}

export default Cart