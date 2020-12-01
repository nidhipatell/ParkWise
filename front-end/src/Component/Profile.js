import { AuthProvider, useAuth } from "../contexts/AuthContext"
import React, { Component, useRef, useState, useEffect } from 'react';
import Header from "./Header.js";
import Footer from "./Footer.js";
import firebase from '../firebase'

export default function Profile() {

    const { currentUser, logout } = useAuth();
    const [locationsList, setlocationList] = useState();

    useEffect(() => {
        var str = currentUser.email.substr(0, currentUser.email.length - 4);
        const locationRef = firebase.database().ref("Users/" + str);
        console.log(str);
        locationRef.on("value", (snapshot) => {
            console.log(snapshot.val());
            const locations = snapshot.val();
            const locationsList = []
            for (let loc in locations) {
                console.log(locations[loc]);
                locationsList.push(locations[loc]);
            }
            console.log(locationsList);
            setlocationList(locationsList);
        });
    }, [])

    return (
        <div>
            <Header />
            <h1 className="greeting"> Hello, {currentUser.email}</h1>
            {locationsList ? locationsList.map((location) => (
                <div className="history">
                    <h1 className="historyHeading">
                        Your history
                    </h1>
                    <div className="table" >
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Date of birth</th>

                            </tr>
                            <tr>
                                <td>{location.Name}</td>
                                <td>{location.Email}</td>
                                <td>{location.location}</td>
                                <td>{location.DoB}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            )) : "Loading"}
            <Footer />
        </div>
    );

}

