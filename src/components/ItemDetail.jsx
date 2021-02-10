import { Card } from 'react-bootstrap';

const ItemDetail = ({ items }) => {
  return (
    <>
      <Card style={{ width: '50rem' }}>
        <Card.Img variant='top' src={items.images} />
        <Card.Body>
          <Card.Title>{items.name}</Card.Title>
          <Card.Text>{items.description}</Card.Text>
          <Card.Text>${items.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemDetail;
