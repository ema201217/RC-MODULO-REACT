import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Layout } from "../layouts/Layout";

export const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValues.email || !formValues.password) {
      setError("Todos los campos son obligatorios");
      return;
    }
    console.log(formValues);

    fetch(`http://localhost:3000/users?email=${formValues.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setError("Este email no esta registrado");
          return;
        }

        const user = data[0];
        if (user.password !== formValues.password) {
          setError("Credenciales invalidas");
          return;
        }

        console.log("Usuario ingresado con éxito");
      });
    setError("");
  };
  return (
    <Layout>
      <Row className="my-5">
        <Col md={12} className="text-center">
          <h1>Login</h1>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Ingresar email con el que te registraste
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Ingresar contraseña"
                onChange={handleChange}
              />
            </Form.Group>
            {error && <p className="text-danger">{error}</p>}
            <Button variant="primary" type="submit">
              Iniciar Sesión
            </Button>
            <Link to="/register" className="link-dark mx-2">
              ¿No estas registrado? Regístrate
            </Link>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};
