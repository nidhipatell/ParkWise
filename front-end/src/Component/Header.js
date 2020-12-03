import React, {Component, useEffect, useState} from 'react';
import { AuthProvider, useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { Button } from 'react-bootstrap'

export default function Header() 
{
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState("")
    const history = useHistory()
    async function handleLogout() 
    {
        setError("")

        try 
        {
            await logout()
            history.push('/')
        } catch 
        {
            setError("Failed to log out")
        }
    }

        return (
            <div className="Header">
                <nav>
                    <ul className="menu-ul">
                        {currentUser && <li><a href="" className="NavBtn" onClick={handleLogout}>Logout {currentUser.email}</a></li>}
                        {currentUser && <li><a href="/Profile" className="NavBtn" >Profile </a></li>}
                        {!currentUser && <li><a href="/Signup" className="NavBtn">Sign Up</a></li>}
                        {!currentUser && <li><a href="/Login" className="NavBtn">Login In</a></li>}                
                        <li><a href="/Contact" className="NavBtn">Contact Us</a></li>
                        <li><a href="/" className="NavBtn">About Us</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
