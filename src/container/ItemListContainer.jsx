import { useEffect, useState } from 'react';
import { ItemCount } from '../components/ItemCount';
import ItemList from '../components/ItemList';
import productList from '../mocks/productList';
import { Spinner } from 'react-bootstrap';

const ItemListContainer = () => {
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

  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
