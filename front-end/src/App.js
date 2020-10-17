import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Authenticate from './Component/Authenticate';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/register" component={AuthenticateScreen} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;