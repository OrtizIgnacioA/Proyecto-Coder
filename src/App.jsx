import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import Cart from './components/Cart';

import CartContext from './context/CartContext';

const App = () => {
  return (
    <BrowserRouter>
      <CartContext>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer />
          </Route>
          <Route exact path='/cervezas'>
            <ItemListContainer />
          </Route>
          <Route exact path='/cervezas/:id'>
            <ItemDetailContainer />
          </Route>
          <Route exact path='/nosotros'></Route>
          <Route exact path='/contacto'></Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          {/* <Route component={NotFound} /> */}
        </Switch>
      </CartContext>
    </BrowserRouter>
  );
};

export default App;
