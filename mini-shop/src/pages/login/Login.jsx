import Button from "../../components/buttons/Button";
import Container from "../../components/container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

const Login = () => {
  const { handleLogin } = useShoppingCartContext();

  return (
    <div>
      <Container>
        <div className="bg-slate-300 p-12 rounded">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <Button onClick={() => handleLogin()}>Login</Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
