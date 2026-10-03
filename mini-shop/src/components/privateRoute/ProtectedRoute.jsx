import { Navigate, Outlet } from "react-router";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

const ProtectedRoute = () => {
  const { isLogin } = useShoppingCartContext();

  return isLogin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
