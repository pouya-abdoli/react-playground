import Container from "../../components/container/Container";
import CartItem from "../../components/cartitem/CartItem";
import Button from "../../components/buttons/Button";

const Cart = () => {
  return (
    <div>
      <Container>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="text-right bg-gray-200 rounded-md p-6">
          <p>قیمت کل: 2000</p>
          <p>تخفیف شما: 2000</p>
          <p> قیمت نهایی: 2000</p>
        </div>
        <Button className="mt-2" variant="success">تبت سفارش</Button>
      </Container>
    </div>
  );
};

export default Cart;
