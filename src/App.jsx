import { useState } from 'react'
import { useCart } from './CartContext'

import './App.css'
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
 const{cart,addToCart,removeFromCart}=useCart();

  return (
    <div>
     <h1>Carrito de Compras</h1>
     <ProductList addToCart={addToCart} />
     <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  )
}

export default App
