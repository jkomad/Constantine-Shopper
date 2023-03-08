import '../styles/Cart.css'
import React, { useEffect, useState } from "react";
// import Modal from '../cart/Modal';

const GuestCart = () => {
    const [edited, setEdited] = useState(false)
    const [removedProduct, setRemovedProduct] = useState(false)
    // const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setEdited(false)
        setRemovedProduct(false)
    }, [edited, removedProduct])

    const getCart = () => {
        const guestCart = []
        const keys = Object.keys(localStorage)
        for (let i = 0; i < keys.length; i++) {
            if(keys[i] === 'debug' || keys[i] === 'loglevel:webpack-dev-server') {
                continue
            } else {
                const orderItem = JSON.parse(localStorage.getItem(keys[i]))
                guestCart.push(orderItem)
            }
        }
        return guestCart   
    }

    const calculateTotal = (cart) => {
        console.log(cart)
        let total = cart.reduce((acc, cv) => {
            cv = cv.product.price * cv.quantity
            return acc + cv
        }, 0)
        return total 
    }

    const handleEdit = (event, productId) => {
        event.preventDefault()
        const product = JSON.parse(localStorage.getItem(`productId${productId}`))
        if(event.target.value > product.quantity) {
            product.quantity++
            localStorage.setItem(`productId${productId}`, JSON.stringify(product))
            setEdited(true)
        } else {
            product.quantity--
            localStorage.setItem(`productId${productId}`, JSON.stringify(product))
            setEdited(true)
        }
    }

    const handleRemoveProduct = (item) => {
        localStorage.removeItem(`productId${item.product.id}`)
        setRemovedProduct(true)
    }

    const guestCart = getCart()
    const total = calculateTotal(guestCart)

    return (
    <div>
      <h1 className="cart-header">Guest Cart</h1>
      <div className="cartBody">
        {guestCart.map((item) => {
          return (
            <div key={item.product.id} className="container">
              <div className="cartContainer">
                <img src={item.product.imgUrl} className="productImg" />
                <div className="cartInfo">
                  <a>
                    {`(${item.quantity})`} {item.product.name}
                  </a>
                  <p>{`Price: $${item.product.price}.00`}</p>
                </div>
              </div>
              <div className="ui">
              <input
                  type="number"
                  min='1'
                  value={item.quantity}
                  onChange={(event) => handleEdit(event, item.product.id)}
                />
                <button onClick={() => handleRemoveProduct(item)}>Remove Product</button>
              </div>
            </div>
          );
        })}
      </div>
        {!total ?  
        <h1 className="total-price">Your Cart is Empty!</h1> 
        :
        <>
        <h1 className="total-price">Total: ${total}</h1>
        {/* <button onClick={() => setIsOpen(true)}>PROCEED TO CHECKOUT</button>
          {isOpen && <Modal setIsOpen={setIsOpen} />} */}
        </>
        }
    </div>
    )
}

export default GuestCart