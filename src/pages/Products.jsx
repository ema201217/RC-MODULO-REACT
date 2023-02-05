import { Col, Row } from "react-bootstrap";
import { CardProduct } from "../components/CardProduct";
import { Layout } from "../layouts/Layout";

export const Products = () => {
  const products = [
    {
      title: "Producto 1",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://www.sony.com.ar/image/d4f672c8c1b08401c3fb67cce747b7db?fmt=png-alpha&wid=660&hei=660",
      price: "102.000",
    },
    {
      title: "Producto 2",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://www.lg.com/ar/images/lavarropas/MD05962336/gallery/medium01.jpg",
      price: "148.000",
    },
    {
      title: "Producto 3",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRySXr6TAXYEjaXA33rFoTN6Bz9i7S_S5A7pMaBfMdttA&s",
      price: "70.000",
    },
    {
      title: "Producto 4",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://i.blogs.es/8a371e/captura-de-pantalla-2020-11-06-a-las-3.35.58/original.png",
      price: "300.000",
    },
  ];
  return (
    <Layout>
      <Row>
        <Col xs={12}>
          <h1 className="text-center my-4">Productos</h1>
        </Col>
        {products.map((product) => {
          return (
            <Col xs={6} md={4} lg={3}>
              <CardProduct product={product} />
            </Col>
          )
        })}
      </Row>
    </Layout>
  );
};
