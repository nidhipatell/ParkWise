import React, {Component} from 'react';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';



export default class Signup extends Component
{
    render(){
        return(
            <div className="signup-container">
                <Header />
                <div class="signup-box">
                    <h1>Login</h1>
                    <div class="textbox">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Email"></input>
                    </div>

                    
                    </div>
                <Footer />
            </div>
        );
    }
}