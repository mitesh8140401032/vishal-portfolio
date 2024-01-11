import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import abc from './vishalp.jpg'
export default function Header() {
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{ position: "fixed", width: "100%", zIndex: 1000000 }}>
                <Container>
                    <Navbar.Brand href="#home" ><h1 className='logo'>VK</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="#Home" >Home</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Skills">Skills</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                            <Nav.Link href="#Resume"> <a href={abc} download className='resume' >Resume</a> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
