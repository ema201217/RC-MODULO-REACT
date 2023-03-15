import { useState } from "react";
import { Col, Form, Row, Button, Image, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Layout } from "../layouts/Layout";

export const CreateProduct = ({ addProduct }) => {
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState({
    image: "",
    title: "",
    price: 0,
    discount: "",
    description: "",
  });
  const redirect = useNavigate();

  const { image, title, price, discount, description } = formValues;

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image || !title || !price || !discount || !description) {
      setError("Todos los campos son obligatorios");
      return;
    }
    addProduct(formValues);
    redirect('/products')
  };

  return (
    <Layout>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row className="my-5">
            <Col md={6} className="align-self-end">
              <Form.Group className="mb-3" controlId="image">
                <Form.Label className="fw-bold mt-3">Imagen</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  placeholder="https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Image
                fluid
                style={{ height: 200 }}
                className="d-block mb-2 shadow rounded-2"
                src={
                  "https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png"
                }
                alt="..."
              />
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label className="fw-bold">Titulo</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="TV Samsung 50'"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  Ingresar un titulo corto del producto
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label className="fw-bold">Precio</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="$ 125000"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  Ingresar el precio del producto
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">% Descuento</Form.Label>
                <Form.Control
                  type="text"
                  name="discount"
                  placeholder="15"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  Ingresar si el producto tiene algún descuento
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Descripción</Form.Label>
                <Form.Control
                  as={"textarea"}
                  name="description"
                  placeholder="Descripción"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  Ingresar la descripción del producto
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              {error && <p className="text-danger">{error}</p>}
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Layout>
  );
};
