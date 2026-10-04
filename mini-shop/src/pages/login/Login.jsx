import { useState } from "react";
import Button from "../../components/buttons/Button";
import Container from "../../components/container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

const Login = () => {
  const { handleLogin } = useShoppingCartContext();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <Container>
        <div className="bg-slate-300 p-12 rounded">
          <input
            type="text"
            placeholder="username"
            onChange={handleChange}
            name="username"
            value={user.username}
          />
          <input
            type="password"
            placeholder="password"
            onChange={handleChange}
            name="password"
            value={user.password}
          />
          <Button onClick={() => handleLogin(user.username, user.password)}>
            Login
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
