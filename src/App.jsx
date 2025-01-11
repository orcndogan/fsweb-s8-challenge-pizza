import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderFormPage from './pages/OrderFormPage';
import Success from './pages/Success';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/order" component={OrderFormPage} />
        <Route path="/success" component={Success} />
      </Switch>
    </Router>
  );
};

export default App;
