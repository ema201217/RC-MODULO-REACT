import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardProduct = ({product}) => {
  return (
    <Card  className="m-auto">
      <Card.Img variant="top" style={{height:'200px',objectFit:'contain'}} src={product.img} />
      <Card.Body>
        <Card.Title as={'h3'}>{product.title}</Card.Title>
        <Card.Text className="text-muted">
          {product.description}
        </Card.Text>
        <Card.Text className='ps-3 fs-4 fw-bold text-success'>
        $ {product.price}
        </Card.Text>
        <Card.Text className="text-end">
        <Button variant="outline-light" className='text-danger fw-bold'>Ver más</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
