import React, { createContext, useState } from 'react';

export const CartContext = createContext();



export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (foodItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === foodItem.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === foodItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...foodItem, quantity: 1 }];
    });
  };

  const removeFromCart = (foodId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== foodId));
  };

  const updateQuantity = (foodId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(foodId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === foodId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};