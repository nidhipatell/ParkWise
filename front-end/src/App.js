import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Contact from './Component/Contact';
import Listing from './Component/Listing';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

function App() 
{
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <Route path="/Listing" component={Listing}/>
            <Route path="/Signup" component={Signup}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Contact" component={Contact}/>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;