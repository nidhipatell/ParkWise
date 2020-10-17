import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <ul>
                    <li><a href="#About Us">About Us</a></li>
                    <li><a href="#Contact Us">Authenticate</a></li>
                    <li><a href="#Authenticate">Contact Us</a></li>
                </ul>
            </div>
        );
    }
}