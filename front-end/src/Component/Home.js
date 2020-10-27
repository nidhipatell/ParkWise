import React from 'react';
import Footer from './Footer.js';
import axios from 'axios';
import Header from './Header.js';

class Home extends React.Component {

render(){
    return (
    <div className="App">
        <Header></Header>
        <img src={process.env.PUBLIC_URL + "images/car.jpg"} width="100%"></img>
        <Footer></Footer>
    </div>
    );
    }
}
export default Home;