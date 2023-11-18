import React, { useState } from "react";
import MyContext from "./shopContext";

  const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const addToCart = (product) => {
  const ProductInCart = cart.find((item) => item.id === product.id);
    if (ProductInCart) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const RemoveFromCart = (id) => {
    const RemovedItem = cart.filter((item) => item.id !== id);
    setCart(RemovedItem);
  };

  // const reduceQuantity = (id) => {
  //   const removeOne = cart.filter((item) => item.id !== id);
  // };
  const cartTotal = cart.reduce((total, item) => total + item.quantity, 0);

  const decreaseQuantity = (id) => {
    const updatedCartItems = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCart(updatedCartItems);
  };

  return (
    <MyContext.Provider
      value={{
        addToCart,
        decreaseQuantity,
        cart,
        cartTotal,
        RemoveFromCart,
        setIsLoading,
        products,
        setProducts,
        isLoading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
