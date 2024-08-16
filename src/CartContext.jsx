import React, { useContext,useState,createContext } from "react"


const CartContext = createContext();


export const useCart =()=>useContext(CartContext)


export const CartProvider = ({Children}) => {
    const[cart,setCart]= useState([])
   
    const addToCart = ()=>{
        setCart((prevCart)=>[...prevCart,product]);
    };

    const removeFromCart =(productId)=>{
       setCart((prevCart)=>prevCart.filter(item =>item.id !== productId))
    }
  
    const value ={
        cart,
        addToCart,
        removeFromCart,
    }
    

  return (
    <CartContext.Provider value={value}>
      {Children}
    </CartContext.Provider>
  )
}


