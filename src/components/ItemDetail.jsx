import { Card } from 'react-bootstrap';
import '../assets/styles/components/ItemDetail.scss';

const ItemDetail = ({ items }) => {
  return (
    <>
      <Card className='cardDetail'>
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
