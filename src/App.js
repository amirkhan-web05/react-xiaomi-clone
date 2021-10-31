import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './components/Details/Details';
import Home from './components/Pages/Home';
import Cart from './components/Pages/Cart/Cart';
import { DataProvider } from './components/context/hooks/DataProvider';

function App() {
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/devices/:id" component={Details}></Route>
          <Route exact path="/cart" component={Cart}></Route>
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
