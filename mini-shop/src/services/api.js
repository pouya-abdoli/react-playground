import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

export async function getProducts() {
  const { data } = await client("/products");
  console.log(data);
  return data;
}

export async function getProduct(id) {
  const {data} = await client(`/products/${id}`)

  return data
  
}
