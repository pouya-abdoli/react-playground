import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.jsx";

createRoot(document.getElementById("root")).render(
  <ShoppingCartProvider>
    <App />
  </ShoppingCartProvider>,
);
