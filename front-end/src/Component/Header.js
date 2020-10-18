import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <ul className = "menu-ul">
                    <li><a href="#Contact Us">Contact Us</a></li>
                    <li><a href="Login.js">Authenticate</a></li>                
                    <li><a href="#About Us">About Us</a></li>
                </ul>
            </div>
        );
    }
}
export default Header;