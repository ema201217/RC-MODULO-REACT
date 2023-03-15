import {
  BrowserRouter as Browser,
  Route,
  Routes
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { CreateProduct } from "./pages/CreateProduct";
import { useEffect, useState } from "react";

export const Root = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addNewProduct = async (data) => {
    try {
      await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Browser>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          path="/create-product"
          element={<CreateProduct addProduct={addNewProduct} />}
        />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Browser>
  );
};
