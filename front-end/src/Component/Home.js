import React from 'react';
import Footer from './Footer.js';
import axios from 'axios';
import Header from './Header.js';

class Home extends React.Component {

render(){
    return (
    <div className="App">
        <Header></Header>
        <div className = "header">
            <form>
                <div className = "form-box">
                    <input type = "text" className = "search-field" 
                    placeholder = "Location"></input>
                    <input type = "date" className = "search-field" 
                    placeholder = "Check in date"></input>
                    <input type = "date" className = "search-field" 
                    placeholder = "Check out date"></input>
                    <input type = "number" className = "search-fields"
                    placeholder = "Cars"></input>
                    
                    <button className = "search-btn" type = "button">Search</button>
                </div>
                
            </form>
            <h1 className = "para">Park N'Go</h1>
            <button className = "explore" type = "button">Explore nearby locations</button>
        </div>
        <Footer></Footer>
    </div>
    );
    }
}
export default Home;