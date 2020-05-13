import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'react-router-dom/Link'

function NavBar() {
    return(
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand>Rey David Cuevas Vela.</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">Resume</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
 
export default NavBar;