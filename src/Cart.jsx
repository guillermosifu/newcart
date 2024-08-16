import { useCart } from "./CartContext";

import React from 'react'

const Cart = () => {
    const{cart,removeFromCart}=useCart()
    const totalPrice = cart.reduce((acc,product)=>acc + product.price , 0)
  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map(product=>(
            <li key={product.id}>
             <span>{product.name}- ${product.price}</span>
             <button onClick={()=>removeFromCart(product.id)}>Eliminar</button>
            </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
    </div>
  )
}

export default Cart

