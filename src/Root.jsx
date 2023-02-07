import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { CreateProduct } from "./pages/CreateProduct";

export const Root = () => {
  return (
    <Browser>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Browser>
  );
};
