import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    // active style
    const activeStyle = {
        color: "#06A6F8"
    };
    return (
        <Navbar bg="" expand="lg" className="navigation-container">
            <Container>
                <Navbar.Brand as={Link} className="nav-title" to="/"><span style={{ color: '#06A6F8' }}>B</span>isness</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-links">
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-3" to="/home">Home</NavLink>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-3" to="/about">About</NavLink>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-3" to="/project">Project</NavLink>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-3" to="/blog">Blog</NavLink>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-3" to="/services">Services</NavLink>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-3" to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;