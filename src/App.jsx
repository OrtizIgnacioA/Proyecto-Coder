import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';

const App = () => {
  return (
    <BrowserRouter>
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
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
