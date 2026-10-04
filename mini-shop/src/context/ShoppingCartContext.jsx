import { useContext, useState, createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { login } from "../services/api";
import { useNavigate } from "react-router";

const ShoppingCartContext = createContext({});

const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

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

  const getProductQty = (product) => {
    // Guard: product may by undefined on first render (before API fetch completes)
    if (!product) return 0;
    return cartItems.find((item) => item.id === product.id)?.qty || 0;
  };

  const handleRemoveProduct = (product) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== product.id),
    );
  };

  const cartQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate()

  const handleLogin = () => {
    login("salar", "1234").finally((data) => {
      const token = "fake-token-12345";
      localStorage.setItem("token", token);
      setIsLogin(true);
      navigate("/store")
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLogin(true);
  }, []);

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        cartQty,
        isLogin,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, useShoppingCartContext, ShoppingCartProvider };
