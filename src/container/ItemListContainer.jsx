import { useEffect, useState } from 'react';
import { ItemCount } from '../components/ItemCount';
import ItemList from '../components/ItemList';
import productList from '../mocks/productList';
import { Spinner } from 'react-bootstrap';

const ItemListContainer = () => {
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

  const onBuy = () => {
    alert(`Su compra de ${count} cervezas fue exitosa`);
  };

  /* ---------------------------------- */
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productList);
      }, 3000);
    });

    myPromise.then((result) => {
      setProducts(result);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    );
  }

  /* ---------------------------------- */

  return (
    <>
      {/*       <ItemCount
        stock={6}
        count={count}
        onSubtract={onSubtract}
        onAdd={onAdd}
        onBuy={onBuy}
      /> */}
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
