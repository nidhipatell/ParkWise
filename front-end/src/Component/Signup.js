import React, {Component, useRef} from 'react';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';
import { Form, Button, Card, Container } from 'react-bootstrap'


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    
    return (
        <div className="signup-container">
            <Header></Header>
            <Container className="d-flex align-item-center justify-content-center" style={{ minHeight: "100vh", }}>
                <div className="w-100" style={{ maxWidth: "400px", alignItems: "center", display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column"}}>
                    <Card style={{ background: "none", border: "none"}}>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            <Form>
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
                                <Button className="w-100 btn" type="submit">Sign Up</Button>

                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? Log In
                    </div>
                </div>
            </Container>
        </div>
    )
}
