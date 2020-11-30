import React, { Component, useRef, useState } from 'react';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap'
import { AuthProvider, useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to sign in")
        }
        setLoading(false)

    }

    return (
        <div className="signup-container">
            <Header></Header>
            <Container className="d-flex align-item-center justify-content-center" style={{ minHeight: "100vh", }}>
                <div className="w-100" style={{ maxWidth: "400px", alignItems: "center", display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column" }}>
                    <Card style={{ background: "none", border: "none" }}>
                        <Card.Body>
                            <h2 className="text-center mb-4">Contact Us</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="firstname">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="John" ref={emailRef} required></Form.Control>
                                </Form.Group>
                                <Form.Group id="lastname">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Doe" ref={emailRef} required></Form.Control>
                                </Form.Group>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="someone@email.com" ref={emailRef} required></Form.Control>
                                </Form.Group>
                                <Form.Group id="message">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your message here" ref={emailRef} required></Form.Control>
                                </Form.Group>                                
                                <Button disabled={loading} className="w-100 btn" type="submit">Send</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Connect with us <Link to="/Signup" className="sign-log-link">Sign Up</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
