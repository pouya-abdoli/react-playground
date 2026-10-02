import { Link } from "react-router";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

const Navbar = () => {
  const { cartQty } = useShoppingCartContext();

  return (
    <div className="h-14 border-b shadow flex items-center">
      <Container>
        <div className="flex justify-between flex-row-reverse">
          <ul className="flex flex-row-reverse">
            <li className="ml-4">
              <Link to="/">خانه</Link>
            </li>
            <li className="ml-4">
              <Link to="/store">فروشگاه</Link>
            </li>
          </ul>

          <div>
            <Link to="/cart" className="relative">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </button>
              {cartQty > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-600 flex justify-center items-center rounded-full text-white text-xs font-bold">
                  {cartQty}
                </span>
              )}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
