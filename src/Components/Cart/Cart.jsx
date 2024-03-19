import React from 'react'
import Cartitems from '../Cartitems/Cartitems'
import './Cart.css';
const Cart = () => {
  return (
    <div className='cart-outer'>
      <div className="cart-inner">
      <Cartitems/>
      </div>
      
    </div>
  )
}

export default Cart
