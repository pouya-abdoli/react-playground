import { Link } from "react-router";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { getProducts } from "../../services/api";
import { useEffect, useState } from "react";

const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <div>
      <Container>
        <h1 className="text-right mt-5">جدیدترین محصولات</h1>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {products.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Store;
