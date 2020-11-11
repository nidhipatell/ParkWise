import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <nav>
                    <ul className = "menu-ul">
                        <li><a href="/Signup" className="NavBtn">Sign Up</a></li>
                        <li><a href="/Login" className="NavBtn">Login In</a></li>                
                        <li><a href="/Contact" className="NavBtn">Contact Us</a></li>
                        <li><a href="/" className="NavBtn">About Us</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Header;