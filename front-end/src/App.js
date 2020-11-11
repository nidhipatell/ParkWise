import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Login from './Component/Login';
import Signup from './Component/Signup';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

function App() 
{
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <Route path="/Signup" component={Signup}/>
            <Route path="/Login" component={Login}/>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;