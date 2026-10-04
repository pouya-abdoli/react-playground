import { Navigate, Outlet } from "react-router";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

const PublicRoute = () => {
  const { isLogin } = useShoppingCartContext();
  return isLogin ? <Navigate to="/store" replace /> : <Outlet />;
};

export default PublicRoute;
