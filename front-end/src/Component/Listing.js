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
                    <h1>{location}</h1>
                    )): "Loading"}
                </div>
            </div>
        )
}