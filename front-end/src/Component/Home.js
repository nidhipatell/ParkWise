import React from 'react';
import Footer from './Footer.js';
import axios from 'axios';
import Header from './Header.js';

class Home extends React.Component {

render(){
    return (
    <div className="App">
        <Header></Header>
        <p>Hello world</p>
        <p>Hello world</p>
        <img src="../public/images/car.jpg" alt="car" width="800" height="600"></img>
        <Footer></Footer>
    </div>
    );
    }
}
export default Home;