import '../styles/Cart.css'
import React from "react";

const GuestCart = () => {

    const getCart = () => {
        const test = localStorage.getItem()
    }

    return (
        <>
        <h1 className='cart-header'>Guest Cart</h1>
        <h1 className='total-price'>Total</h1>
        </>
    )
}

export default GuestCart