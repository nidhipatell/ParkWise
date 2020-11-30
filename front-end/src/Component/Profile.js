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

        const locationRef=firebase.database().ref("Users/"+str);
        
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
    

    return(
        <div>
           {/* <Header/> */}
                <h1 className="greeting"> Hello, {currentUser.email}</h1>
                {/* <div className="history">
                <h1 className="historyHeading">
                       Your history
                    </h1>
                    <div className="table" >
                        <table>
                            <tr>
                                <th>Location</th>
                                <th>Date</th>
                            </tr>

                            <tr>
                                <td>401, Sunset Avenue</td>
                                <td>1/12/2020</td>
                            </tr>
                        </table>
                    </div>
                    </div>
           <Footer /> */}
        </div>
    );

}

