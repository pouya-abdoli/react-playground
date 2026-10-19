import { Outlet } from "react-router";
import Header from "../components/Header";
import Category from "../components/Category";
import Hero from "../components/Hero";

const Root = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Category />
        <Outlet />
    </div>
  );
};

export default Root;
