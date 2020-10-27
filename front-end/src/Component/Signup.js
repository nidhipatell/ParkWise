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
                    <h1>Sign up</h1>
                    <div class="textbox">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Email"></input>
                    </div>

                    <div class="text">
                        <i class="fas fa-lock"></i>
                        <input type="Name" placeholder="Name"></input>
                    </div>

                    <div class="text">
                        <i class="fas fa-lock"></i>
                        <input type="lastname" placeholder="Last Name"></input>
                    </div>

                    <div class="textbox">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password"></input>
                    </div>

                    <input type="button" class="btn" value="Sign in"></input>
                    
                    </div>
                <Footer />
            </div>
        );
    }
}