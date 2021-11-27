import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailsPhone from './components/Details/DetailsPhone';
import DetailsTv from './components/Details/DetailsTv';
import DetailsSmart from './components/Details/DetailsSmart';
import Home from './components/Pages/Home';
import Cart from './components/Pages/Cart/Cart';
import { DataProvider } from './components/context/hooks/DataProvider';
import { Email } from './components/Email/Email';

function App() {
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/devicesphone/:id"
            component={DetailsPhone}
          ></Route>
          <Route exact path="/cart/:id" component={Cart}></Route>
          <Route exact path="/devicestv/:id" component={DetailsTv}></Route>
          <Route exact path="/email" component={Email} />
          <Route
            exact
            path="/devicessmart/:id"
            component={DetailsSmart}
          ></Route>
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
