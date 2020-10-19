import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <nav>
                    <ul className = "menu-ul">
                        <li><a href="#About Us" className="NavBtn">Sign Up</a></li>
                        <li><a href="#About Us" className="NavBtn">Login In</a></li>                
                        <li><a href="#About Us" className="NavBtn">Contact Us</a></li>
                        <li><a href="#About Us" className="NavBtn">About Us</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Header;