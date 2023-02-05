import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Header />
        </Col>
        <Col md={8} className='m-auto'>
          {children}
        </Col>
        <Col md={12}>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};
