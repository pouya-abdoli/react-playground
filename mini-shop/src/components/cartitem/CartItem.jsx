import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Product from "../../pages/product/Product";
import Button from "../buttons/Button";

const CartItem = ({ id, qty, title, price, image }) => {
  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  // Bundle props back into a product object for handlers
  const product = { id, qty, title, price, image };

  return (
    <div className="flex flex-row-reverse items-center gap-4 mt-5 border-b pb-2">
      <img className="w-28 rounded" src={image} alt={title} />

      <div className="mr-4">
        <h3 className="text-right">{title}</h3>

        <div className="mt-2">
          <Button
            onClick={() => handleRemoveProduct(product)}
            className="mr-2 px-1"
            variant="danger"
          >
            Remove
          </Button>
          <Button
            onClick={() => handleDecreaseProductQty(product)}
            className="px-1"
            variant="primary"
          >
            -
          </Button>
          <span className="px-2">{qty}</span>
          <Button
            onClick={() => handleIncreaseProductQty(product)}
            className="px-1"
            variant="danger"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
