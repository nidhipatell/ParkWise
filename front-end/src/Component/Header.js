import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
<<<<<<< HEAD
                <ul>
                    <li><a href="#About Us">About Us</a></li>
                    <li><a href="#Contact Us">Authenticate</a></li>
                    <li><a href="#Authenticate">Contact Us</a></li>
=======
                <ul className = "menu-ul">
                    <li><a href="#Contact Us">Contact Us</a></li>
                    <li><a href="#Authenticate">Authenticate</a></li>                
                    <li><a href="#About Us">About Us</a></li>
>>>>>>> 08e4acef8b9871fd5ae9facf86a239eecefbc589
                </ul>
            </div>
        );
    }
}