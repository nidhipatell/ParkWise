import React, {Component, useRef, useState} from 'react';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap'
import { AuthProvider, useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value.length < 6){
            return setError("Password is not greater than 6 character")
        }

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Password do not match")
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError("Failed to create an account")
        }
        setLoading(false)

    }
    
    return (
        <div className="signup-container">
            <Header></Header>
            <Container className="d-flex align-item-center justify-content-center" style={{ minHeight: "100vh", }}>
                <div className="w-100" style={{ maxWidth: "400px", alignItems: "center", display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column"}}>
                    <Card style={{ background: "none", border: "none"}}>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="someone@email.com" ref={emailRef} required></Form.Control>  
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Passwword</Form.Label>
                                    <Form.Control type="password" placeholder="Must have at least 6 characters" ref={passwordRef} required></Form.Control>  
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" placeholder="Retype your password" ref={passwordConfirmRef} required></Form.Control>  
                                </Form.Group>
                                <Button disabled={loading} className="w-100 btn" type="submit">Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/Login" className="sign-log-link">Log In</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
