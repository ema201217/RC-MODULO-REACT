import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Layout } from "../layouts/Layout";

export const Register = () => {
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

    fetch("http://localhost:3000/users", {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    })
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
