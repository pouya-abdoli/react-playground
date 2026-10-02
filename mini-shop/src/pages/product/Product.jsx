import { useParams } from "react-router";
import Container from "../../components/container/Container";
import Button from "../../components/buttons/Button";
import { getProduct } from "../../services/api";
import { useEffect, useState } from "react";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

const Product = () => {
  const params = useParams();

  const [product, setProduct] = useState();

  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    cartItems,
    getProductQty,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(params.id).then((result) => {
      setProduct(result);
    });
  }, []);

  console.log(cartItems);

  return (
    <div>
      <Container>
        <div className=" h-96 mt-4 shadow grid grid-cols-12">
          <div className=" col-span-10 p-4">
            <h1 className="font-bold text-xl">{product?.title}</h1>
            <div>
              <p className="text-right">{product?.price}$</p>
              <p className="text-gray-500">{product?.description}</p>
            </div>
          </div>

          <div className=" col-span-2 bg-sky-200 p-4">
            <img
              className="w-full rounded"
              src={product?.image}
              alt={product?.title}
            />

            {getProductQty(product) === 0 ? (
              <Button
                onClick={() => handleIncreaseProductQty(product)}
                variant="primary"
                className=" py-1 w-full mt-2"
              >
                Add to cart
              </Button>
            ) : (
              <div className="grid grid-cols-3">
                <Button
                  onClick={() => handleIncreaseProductQty(product)}
                  variant="primary"
                  className=" py-1 w-full mt-2"
                >
                  +
                </Button>
                <span className="font-bold flex justify-center items-center">
                  {getProductQty(product)}
                </span>
                <Button
                  onClick={() => handleDecreaseProductQty(product)}
                  variant="primary"
                  className=" py-1 w-full mt-2"
                >
                  -
                </Button>
                
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
