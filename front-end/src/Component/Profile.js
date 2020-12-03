import { AuthProvider, useAuth } from "../contexts/AuthContext"
import React, { Component, useRef, useState, useEffect } from 'react';
import Header from "./Header.js";
import Footer from "./Footer.js";
import firebase from '../firebase';
import { useHistory } from "react-router-dom";

export default function Profile() {

    const { currentUser, logout } = useAuth();
    const [locationsList, setlocationList] = useState();

    const [dob, setdob] = useState();
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [location, setlocation] = useState();
    const history = useHistory();
    
    useEffect(() => {
        if (currentUser) {
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
            setdob(locationsList[0]);
            setemail(locationsList[1]);
            setlocation(locationsList[2]);
            setname(locationsList[3]);
          });}
          else {
            history.push("/");
          }
    }, [])

    return (
        <div>
            <Header />
            <div className = "ov">
            <h1 className="greeting"> Hello, {name}</h1>
                <div className="history">
                    <h1 className="historyHeading">
                        Personal Information
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
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{location}</td>
                                <td>{dob}</td>
                            </tr>
                        </table>
                        </div>
                        <h1 className="historyHeading">
                            Your history
                        </h1>
                        <div className = "table" style={{marginBottom: "100px"}}>
                        <table>
                            <tr>
                                <th>Location</th>
                                <th>Parking Date</th>
                            </tr>
                            <tr>
                                <td>1150 St.Paul Avenue</td>
                                <td>2/2/1970</td>
                            </tr>
                        </table>
                        
                    </div>
                </div>
                </div>
            <Footer />
        </div>
    );

}