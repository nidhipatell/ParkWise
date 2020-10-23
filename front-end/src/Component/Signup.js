import React, {Component} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';



export default class Signup extends Component
{
    render(){
        return(
            <div>
                <Header /> 
                <p>This is the sign up page</p>
                <Footer />

            </div>
        );
    }
}