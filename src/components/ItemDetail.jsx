import { Card, Button } from 'react-bootstrap';
import '../assets/styles/components/ItemDetail.scss';
import { useState } from 'react';
import { ItemCount } from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ items }) => {
  const [count, setCount] = useState(1);
  const [irCart, setIrCart] = useState(false);

  const onAdd = (stock) => {
    console.log(stock);
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const onSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      console.log('Valor no valido');
    }
  };

  const onBuy = () => {
    alert(`Su compra de ${count} cervezas fue exitosa`);
    setIrCart(true);
  };

  return (
    <>
      <Card className='cardDetail'>
        <Card.Img variant='top' src={items.images} />
        <Card.Body>
          <Card.Title>{items.name}</Card.Title>
          <Card.Text>{items.description}</Card.Text>
          <Card.Text className='price'>${items.price}</Card.Text>
        </Card.Body>
        {irCart ? (
          <Button style={{ margin: '10px' }}>
            <Link
              to={'/cart'}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Ir al Carrito
            </Link>
          </Button>
        ) : (
          <ItemCount
            stock={6}
            count={count}
            onSubtract={onSubtract}
            onAdd={onAdd}
            onBuy={onBuy}
          />
        )}
      </Card>
    </>
  );
};

export default ItemDetail;
