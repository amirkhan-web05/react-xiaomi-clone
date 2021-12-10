import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailsPhone from './components/Details/DetailsPhone';
import DetailsTv from './components/Details/DetailsTv';
import DetailsSmart from './components/Details/DetailsSmart';
import Home from './pages/Home';
import Cart from './pages/Cart/Cart';
import { DataProvider } from './context/data/DataProvider';
import { Email } from './components/Email/Email';

function App() {
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/devicesphone/:parentId"
            component={DetailsPhone}
          ></Route>
          <Route exact path="/cart/:id" component={Cart}></Route>
          <Route
            exact
            path="/devicestv/:parentId"
            component={DetailsTv}
          ></Route>
          <Route exact path="/email" component={Email} />
          <Route
            exact
            path="/devicessmart/:parentId"
            component={DetailsSmart}
          ></Route>
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
