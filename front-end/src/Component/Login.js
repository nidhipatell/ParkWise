import React, {Component} from "react"
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';

class Login extends React.Component {
    render() {
        return (
            <div className="login-container">
                <Header />
                <div>
                    <h1>CAR</h1>
                </div>
                <Footer />
            </div>
            )
    }
}

export default Login;