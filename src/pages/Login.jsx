import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Layout } from "../layouts/Layout";

export const Login = () => {
  return (
    <Layout>
      <Row className="my-5">
        <Col md={12} className="text-center">
          <h1>Login</h1>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Ingresar email con el que te registraste
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>

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
