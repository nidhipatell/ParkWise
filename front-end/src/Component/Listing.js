import React, {Component, useRef, useState, useEffect} from 'react';
import Header from "./Header.js";
import Footer from "./Footer.js";
import firebase from '../firebase'

export default function Listing(props) {
    var location = props.location.state.data

    const[locationsList, setlocationList] = useState();

    useEffect(()=>{
        const locationRef = firebase.database().ref("major_locations/"+location);
        locationRef.on("value",(snapshot)=> {
            console.log(snapshot.val());
            const locations = snapshot.val();
            const locationsList = []
            for (let loc in locations){
                console.log(locations[loc]);
                locationsList.push(locations[loc]);    
            }
            console.log(locationsList);
            setlocationList(locationsList);
        });
    },[])


        return (
            <div className="header">
                <Header></Header>
                <h1 className="display-5 location-parking">Parking in {location}</h1>
                <hr className="location-hr"></hr>
                <div className="location-parking">
                    {locationsList ? locationsList.map((location) => (
                    <div className = "parking-listing">
                        <div className = "card flex-row flex-wrap">
                            <div class="card-header border-0">
                                <img className = "card-image-left listing-image" src = "/images/house1.jpg"></img>
                            </div>
                              <div class="card-body">
                                <h4 class="card-title">{location.address}</h4>
                                <p class="card-title">Postal Code: {location.postalcode}</p>
                                <p className = "card-title">Price: ${location.price}</p>
                                <p className = "card-title">Spots: {location.spots}</p>
                                <p className = "card-title">Host: {location.host}</p>
                                <a href="#" class="btn btn-primary w-100">Book this place</a>
                            </div>
                        </div>
                    </div>
                    )): "Loading"}
                </div>
            </div>
        )
}