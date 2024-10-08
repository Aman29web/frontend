import { createContext, useState } from "react";
import React from "react";
import all_product from '../Components/Assests/all_product'

export const ShopContext =createContext(null);

const getDefaultCart =()=>{
    let cart={};
    for (let index=0;index<all_product.length+1;index++){
        cart[index]=0;
    }
    return cart;
}

const ShopConextProvider=(props)=>{

    const [cartItems,setCartItems]=useState(getDefaultCart());
   
    
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const conextValue={all_product,cartItems,addToCart,removeFromCart};


    return (
        <ShopContext.Provider value={conextValue}>

            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopConextProvider;