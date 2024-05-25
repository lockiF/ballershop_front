import React, {createContext, useState, useContext } from "react";

const ShopContext = createContext();

export const ShopContextProvider = ({children}) => {
    const[category, setCategory] = useState('Catalogue');
    return(
        <ShopContext.Provider value={{category, setCategory}}>
            {children}
        </ShopContext.Provider>
    )
}
export const useShopContext = () => useContext(ShopContext);