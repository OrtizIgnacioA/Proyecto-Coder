import './App.css';
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
          <ItemListContainer greeting={'PROXIMAMENTE CATALOGO'} />
        </Route>
        <Route exact path='/productos'>
          <ItemDetailContainer />
        </Route>
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
