import { useState } from 'react';
import { ItemCount } from '../components/ItemCount';

const ItemListContainer = ({ greeting }) => {
  const [count, setCount] = useState(1);

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

  return (
    <>
      <a className='h1 row justify-content-center'>{greeting}</a>
      <ItemCount
        stock={6}
        count={count}
        onSubtract={onSubtract}
        onAdd={onAdd}
      />
    </>
  );
};

export default ItemListContainer;
