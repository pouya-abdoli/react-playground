import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

const Root = () => {
  return (
    <div>
      <ShoppingCartProvider>
        <Navbar />
        <Outlet />
      </ShoppingCartProvider>
    </div>
  );
};

export default Root;
