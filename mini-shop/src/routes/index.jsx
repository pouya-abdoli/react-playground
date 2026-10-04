import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Store from "../pages/store/Store";
import Product from "../pages/product/Product";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import ProtectedRoute from "../components/privateRoute/ProtectedRoute";
import PublicRoute from "../components/PublicRoute/PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // Public routes
      { index: true, element: <Home /> },
      { path: "store", element: <Store /> },
      { path: "product/:id", element: <Product /> },

      // Guest-only routes (redirect to home if already logged in)
      {
        element: <PublicRoute />,
        children: [{ path: "login", element: <Login /> }],
      },

      // Protected routes (redirect to login if not authenticated)
      {
        element: <ProtectedRoute />,
        children: [{ path: "cart", element: <Cart /> }],
      },
    ],
  },
]);

export default router;
