import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // Public routes
      { index: true, element: <Home /> },
    ],
  },
]);

export default router;
