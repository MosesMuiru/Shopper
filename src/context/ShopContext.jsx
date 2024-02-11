import React, { useState } from "react";

import all_product from "../components/Assets/all_product";

import { createContext } from "react";

export const ShopContext = createContext(null);

// function that will create an empty cart
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

// provider
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
    // console.log(cartItems)

  // used to add items to the cart
  const addToCart = (itemId) => {
    console.log(itemId)
    setCartItems((prev) => ({ ...prev, 
        [itemId]:prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, 
        [itemId]:prev[itemId] - 1 }));
  };
  const getTotalAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems) {
        if(cartItems[item] > 0)
        {
            let itemInfo = all_product.find((product) => product.id === Number(item))
            totalAmount += itemInfo.new_price * cartItems[item]
        

        }
    }
    return totalAmount
    
  }

  const getTotalCartItems = () => {
    let totalItem = 0;

    for(const item in cartItems)
    {
        if(cartItems[item] > 0)
        {
            totalItem += cartItems[item]
        }
    }
    return totalItem
  }

  const contextValue = {
getTotalCartItems ,getTotalAmount, all_product, cartItems, addToCart, removeFromCart
  }
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
