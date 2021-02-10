import { useEffect, useState } from 'react';
import productList from '../mocks/productList';
import { Spinner } from 'react-bootstrap';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productList[0]);
      }, 2000);
    });

    getItem.then((result) => {
      setItems(result);
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
  return <ItemDetail items={items} />;
};

export default ItemDetailContainer;
