import React, {Component} from "react"
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';

class Login extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <p>Hello world</p>
                <p>Hello world</p>
                <Footer />
            </div>
            )
    }
}

export default Login;