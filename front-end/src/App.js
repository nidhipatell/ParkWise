import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Contact from './Component/Contact';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() 
{
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Signup" component={Signup}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;