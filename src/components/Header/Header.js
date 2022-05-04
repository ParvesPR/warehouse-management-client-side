import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar sticky="top" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img style={{width: '80px'}} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-space-around'>
                        <Nav className="me-auto ">
                            <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="/inventory">Inventory</Nav.Link>
                            
                        </Nav>
                        <Nav className="ms-auto ">
                        <Nav.Link className='text-white' as={Link} to="/portfolio">Blog</Nav.Link>
                        <Nav.Link className='text-white' as={Link} to="/portfolio">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
};

export default Header;