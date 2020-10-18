import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Signup from './Component/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Signup} />
          <Route path="/Signup" component ={Signup} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;