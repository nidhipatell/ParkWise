import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Login from './Component/Login';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Home} />

        </Switch>
      </div>
    </Router>
  );
}
export default App;