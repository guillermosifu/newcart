import React, { useContext,useState,createContext } from "react"


const CartContext = createContext();


export const useCart =()=>useContext(CartContext)


export const CartProvider = ({children}) => {
    const[cart,setCart]= useState([])
   
    const addToCart = (product)=>{
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
      {children}
    </CartContext.Provider>
  )
}


