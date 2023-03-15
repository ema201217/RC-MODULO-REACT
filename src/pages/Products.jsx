import { Col, Row } from "react-bootstrap";
import { CardProduct } from "../components/CardProduct";
import { Layout } from "../layouts/Layout";

export const Products = ({ products }) => {
  return (
    <Layout>
      <Row>
        <Col xs={12}>
          <h1 className="text-center my-4">Productos</h1>
        </Col>
        {products.map((product) => {
          return <CardProduct product={product} key={product.id} />;
        })}
      </Row>
    </Layout>
  );
};
