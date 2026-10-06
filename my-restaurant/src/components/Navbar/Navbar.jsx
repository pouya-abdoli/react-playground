import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router";
import LOGO from "../../assets/images/food-logo.png"

const Navbar = () => {
  return (
    <div className="shadow-md bg-white duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button className="bg-linear-to-r from-yellow-400 to-yellow-500 text-white py-1 px-4 rounded-full flex items-center gap-3">
              سفارش
              <FaCartShopping />
            </button>
            <ul className="hidden sm:flex items-center gap-4">
              <li>
                <Link
                  to="/services"
                  className="hover:text-yellow-500 inline-block py-4 px-4"
                >
                  خدمات
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-500 inline-block py-4 px-4"
                >
                  درباره
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-yellow-500 inline-block py-4 px-4"
                >
                  بلاگ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              اژدر
              <img src={LOGO} className="w-10" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
