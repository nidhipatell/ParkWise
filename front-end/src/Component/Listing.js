import React, {Component, useRef, useState} from 'react';
import Header from "./Header.js";


export default class Listing extends React.Component{
    render() {
        return (
            <div>
                <Header></Header>
                <h1>Hello{this.props.location.state.data}</h1>
            </div>
        )
    }
}
