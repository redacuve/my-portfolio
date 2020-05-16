import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

function NavBar() {
    return(
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand>Rey David Cuevas Vela.</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                    <Link className="nav-link" to="/my-portfolio/">Home</Link>
                    <Link className="nav-link" to="/my-portfolio/resume">Resume</Link>
                    <Link className="nav-link" to="/my-portfolio/contact">Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
 
export default NavBar;