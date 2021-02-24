import { createContext, useState } from 'react';

export const cartContext = createContext();

function CartContext({ children }) {
  const [product, setProduct] = useState([]);

  const addCart = (items) => {
    if (isInCart(items.items.id) === -1) {
      setProduct(items);
    } else {
      //realizar
    }
  };

  const isInCart = (id) => {
    return product.findIndex((prod) => prod.id === id);
  };

  return (
    <>
      <cartContext.Provider
        value={{ product, addCart /* quantity: product.length */ }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
}

export default CartContext;
