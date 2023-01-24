import { Link, Outlet } from "react-router-dom";
import clases from "./index.module.css";

export const Root = () => {
  return (
    <div className={clases.rootContainer}>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/detalle">Detalle de producto</Link>
            </li>
            <li>
              <Link to="/carrito">Carrito de compra</Link>
            </li>
            <li>
              <Link to="/ingresar">Iniciar Sesión</Link>
            </li>
            <li>
              <Link to="/registrar">Registro de usuario</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <section>
          <small>Made by Rolling Code! ➡️ Teacher Emanuel y Jose</small>
        </section>
      </footer>
    </div>
  );
};
