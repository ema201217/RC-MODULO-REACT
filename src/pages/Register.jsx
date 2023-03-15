import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../layouts/Layout";

export const Register = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const redirect = useNavigate()

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const existEmailInDB = async (email) => {
    const response = await fetch(
      `http://localhost:3000/users?email=${email}`
    );
    const data = await response.json();
    if (data.length && data[0].email === email) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formValues.email || !formValues.password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (await existEmailInDB(formValues.email)) {
      setError("Este email ya existe en los registros");
      return;
    }

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    setError("")
    redirect('/login')
  };

  return (
    <Layout>
      <Row className="my-5">
        <Col md={12} className="text-center">
          <h1>Register</h1>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" onChange={handleChange} />
              <Form.Text className="text-muted">
                Ingresar email para registrarte
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            {error && <p className="text-danger">{error}</p>}

            <Link to="/login" className="link-dark mx-2">
              ¿Ya tienes cuenta? Iniciar sesión
            </Link>
            <Button variant="primary" type="submit">
              Registrase
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};
