import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Layout } from "../layouts/Layout";

export const Register = () => {
  return (
    <Layout>
      <Row className="my-5">
        <Col md={{ span: 4, offset: 4 }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
              <Form.Text className="text-muted">
                Ingresar email para registrarte
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="terminos">
              <Form.Check
                type="checkbox"
                label="Aceptar términos y condiciones"
                id="terminos"
              />
            </Form.Group>
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
