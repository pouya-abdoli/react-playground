import { Outlet, ScrollRestoration } from "react-router";
import Header from "../components/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <ScrollRestoration getKey={(location) => location.pathname} />
    </div>
  );
};

export default Root;
