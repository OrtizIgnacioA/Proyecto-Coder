import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ItemCount = ({ stock, count, onSubtract, onAdd, onBuy }) => {
  return (
    <>
      <ButtonGroup aria-label='Basic example'>
        <Button onClick={onSubtract}>-</Button>
        <Button>{count}</Button>
        {count < stock ? (
          <Button
            onClick={() => {
              onAdd(stock);
            }}
          >
            +
          </Button>
        ) : (
          <Button variant='warning'>Solo hasta 6 Productos</Button>
        )}
      </ButtonGroup>

      <Button onClick={onBuy} style={{ margin: '10px' }}>
        <Link
          to={'/cart'}
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          Terminar Comprar
        </Link>
      </Button>
    </>
  );
};
