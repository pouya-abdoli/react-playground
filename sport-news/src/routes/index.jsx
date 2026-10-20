import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import BlogDetails from "../pages/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // Public routes
      { index: true, element: <Home /> },
      {path: "blog/:id", element: <BlogDetails/>},
    ],
  },
]);

export default router;
