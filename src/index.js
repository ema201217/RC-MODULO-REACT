import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Contact } from "./pages/Contact";
import { DetailProduct } from "./pages/DetailProdut";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ShoppingCart } from "./pages/ShoppingCart";
import { Root } from "./Root";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/detalle',
        element:<DetailProduct/>
      },
      {
        path:'/carrito',
        element:<ShoppingCart/>
      },
      {
        path:'/ingresar',
        element:<Login/>
      },
      {
        path:'/registrar',
        element:<Register/>
      },
      {
        path:'/contacto',
        element:<Contact/>
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
