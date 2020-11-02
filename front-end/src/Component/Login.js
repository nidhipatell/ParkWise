  
import React, {Component} from "react"
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';

class Login extends React.Component {
    render() {
        return (
            <div className="login-container">
                <Header />
                <div class="login-box">
                    <h1>Login</h1>
                    <div class="textbox">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Email"></input>
                    </div>

                    <div class="textbox">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password"></input>
                    </div>

                    <input type="button" class="btn" value="Sign in"></input>
                    </div>
                <Footer />
            </div>
            )
    }
}

export default Login;