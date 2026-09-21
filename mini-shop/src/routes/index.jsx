import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Store from "../pages/store/Store";
import Product from "../pages/product/Product";
import Cart from "../pages/cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "store", element: <Store /> },
      { path: "product/:id", element: <Product /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

export default router;
