import React, {Component, useRef, useState} from 'react';
import Footer from './Footer.js';
import axios from 'axios';
import Header from './Header.js';
import { Button, Container } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom"
import Listing from './Listing.js';
export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''}
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
        this.props.history.push({
            pathname: '/Listing',
            state: { data: this.state.value }
        });
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

    render() {
        return (
        <div>
            <Header></Header>
            <div className = "header">
                <form onSubmit={this.handleSubmit}>
                    <Container className="d-flex align-item-center justify-content-center pr-5" style={{ minHeight: "10vh", }}>
                        <input type = "text" className = "search-field" 
                        placeholder = "Enter location" value={this.state.value} onChange={this.handleChange}></input>
                        <input type = "date" className = "search-field" 
                        placeholder = "Check in date"></input>
                        <input type = "date" className = "search-field" 
                        placeholder = "Check out date"></input>
                        <Button className="w-100 search-btn h-100" type="submit" value="Submit">Search Parking!</Button>
                        {/* {this.state.value && <Listing data={this.state} />} */}
                    </Container>
                </form>
                <h1 className = "para">Park N'Go</h1>
                <button className = "explore" type = "button">Explore nearby locations</button>
            </div>
                <div className="services">
                    <div className="container">
                        <div className="firstrow row">
                            <div className="icon col-md-5">
                                <img src="images/search.png" alt="" />
                            </div>
                            <div className="searchPara col-md-7">
                                <h2>Search</h2>
                            Ease your search for parkings in busy areas like donwtown by searching for parking-slots including residents' driveways
                            </div>
                        </div>
                        <div className="secondrow row">
                            <div className="bookPara col-md-7">
                                <h2>Book</h2>
                            Book for your parking spot at a nearby driveway at a convenient location
                            </div>
                            <div className="icon col-md-5">
                                <img src="images/book.png" alt="" />
                            </div>
                        </div>
                        <div className="thirdrow row">
                            <div className="icon col-md-5">
                                <img className = "cashh" src="images/cash.png" alt=""/>
                            </div>
                            <div className="budgetPara col-md-7">
                                <h2>Budget</h2>
                            Get a budget friendly parking spot for a longer period of time
                            </div>
                        </div>
                    </div>
                </div>
            <div className="cities">
            <h3 className="city"> Featured Cities</h3>
            <div className="imageTor">Toronto</div>
            <div className="imageOta">Ottawa</div>
            <div className="imageVan">Vancover</div>
            <div className="imageAlb">Alberta</div>
            <div className="imageMon">Monteral</div>
            <div className="imageQue">Quebec</div>
            </div>
            
        </div>
        );
    }
}
