import React from 'react';
import './SubHeader.css';
import { FaStopwatch } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
const SubHeader = () => {
    return (
        <Navbar bg="primary" expand="lg" className="navigation-container">
            <Container className="text-white">
                <Nav className="me-auto">
                    <p className="mx-3 my-0" ><FaStopwatch></FaStopwatch> We are open 24/7</p>
                    |
                    <p className="mx-3 my-0" ><MdEmail></MdEmail> mail@email.com</p>

                </Nav>
                <Nav className="ms-auto">
                    <a className="mx-3" href="#home"><AiFillTwitterCircle style={{ fontSize: '1.2em' }}></AiFillTwitterCircle></a>
                    <a className="mx-3" href="#about"><BsFacebook style={{ fontSize: '1.2em' }}></BsFacebook></a>
                    <a className="mx-3" href="#project"><BsLinkedin style={{ fontSize: '1.2em' }}></BsLinkedin></a>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default SubHeader;