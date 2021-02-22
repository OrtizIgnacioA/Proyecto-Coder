import { Card, Button, CardGroup } from 'react-bootstrap';
import '../assets/styles/components/Item.scss';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <>
      <CardGroup className='cardGroup'>
        <Card className='cards'>
          <Card.Img variant='top' src={product.images} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text className='price'>${product.price}</Card.Text>
            <Link to={'/cervezas/negra/detalle'}>
              <Button className='button' variant='primary'>
                Ver Detalle
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default Item;
