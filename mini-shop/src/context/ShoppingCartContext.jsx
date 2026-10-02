import { useContext, useState, createContext } from "react";

const ShoppingCartContext = createContext({});

const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleIncreaseProductQty = (product) => {
    setCartItems((currentItems) => {
      const exists = currentItems.find((item) => item.id === product.id);

      if (exists) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }

      return [...currentItems, { ...product, qty: 1 }];
    });
  };

  const handleDecreaseProductQty = (product) => {
    setCartItems((currentItems) => {
      const exists = currentItems.find((item) => item.id === product.id);

      if (!exists) return currentItems;

      if (exists.qty === 1) {
        return currentItems.filter((item) => item.id !== product.id);
      }
      return currentItems.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty - 1 } : item,
      );
    });
  };

  return (
    <ShoppingCartContext.Provider value={{ cartItems, handleIncreaseProductQty, handleDecreaseProductQty }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, useShoppingCartContext, ShoppingCartProvider };
