import { Outlet } from "react-router";
import Header from "../components/Header";
import Category from "../components/Category";

const Root = () => {
  return (
    <div>
        <Header />
        <Category />
        <Outlet />
    </div>
  );
};

export default Root;
