import { createContext } from "react";
import React from "react";
import all_product from '../Components/Assests/all_product'

export const ShopContext =createContext(null);
const ShopConextProvider=(props)=>{

    const conextValue={all_product};

    
    return (
        <ShopContext.Provider value={conextValue}>

            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopConextProvider;