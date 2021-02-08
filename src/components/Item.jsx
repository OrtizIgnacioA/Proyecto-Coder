import { Card } from 'react-bootstrap';

const Item = ({ product }) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={product.images} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
