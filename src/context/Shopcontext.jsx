import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultItems = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopcontextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultItems());
  const addToCart = (itemId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemId]: prevState[itemId] + 1,
    }));
  };
  const updateCartItemsCount = (newAmount, itemId) => {
    setCartItems((prevState) => ({ ...prevState, [itemId]: newAmount }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemId]: prevState[itemId] - 1,
    }));
  };
  const totalAmount = () => {
    let totalAmount=0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  console.log(totalAmount());

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemsCount,
    totalAmount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
