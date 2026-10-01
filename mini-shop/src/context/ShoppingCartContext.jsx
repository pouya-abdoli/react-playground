import { useContext, useState, createContext } from "react";

const ShoppingCartContext = createContext({});

const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const handleIncreaseProductQty = (product) => {
    setCartItem((currentItems) => {
      const exists = currentItems.find((item) => item.id === product.id);

      if (exists) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }

      return [...currentItems, { ...product, qty: 1 }];
    });
  };
  return (
    <ShoppingCartContext.Provider value={{ cartItem, handleIncreaseProductQty }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, useShoppingCartContext, ShoppingCartProvider };
