import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

export async function getProducts() {
  const { data } = await client("/products");
  return data;
}

export async function getProduct(id) {
  const { data } = await client(`/products/${id}`);

  return data;
}
export async function login(username, password) {
  const { data } = await client.post("/login", {username, password})

  return data;
}
