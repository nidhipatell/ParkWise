import React, {Component} from "react"
import Header from './Header.js';
import Footer from './Footer.js';

class Contact extends React.Component {

    render(){
        return (
        <div className="app">
            <Header></Header>
            <div className = "contactback">
                <form className = "form">
                    <label>Name</label>
                    <input placeholder = "Name"></input>

                    <label>Email</label>
                    <input placeholder = "Email"></input>

                    <label>Message</label>
                    <textarea placeholder = "Message"></textarea>
                
                    <button type = "submit">Submit</button>
                </form>
            </div>
            <Footer></Footer>
            </div>
        );
        }
    }
    export default Contact;