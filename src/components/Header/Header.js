import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar fixed="top" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img style={{ width: '80px' }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-space-around'>
                        <Nav className="me-auto">
                            <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link className='text-white' as={Link} to="/inventory">Manage Inventory</Nav.Link>
                                    <Nav.Link className='text-white' as={Link} to="/additem">Add Item</Nav.Link>
                                    <Nav.Link className='text-white' as={Link} to="/myitems">My Items</Nav.Link>
                                </>
                            }

                        </Nav>
                        <Nav className="ms-auto ">
                            <Nav.Link className='text-white' as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
                            {
                                user ?
                                    <button className='text-white btn btn-outline-danger rounded-pill' onClick={handleSignOut}>Sign out</button>
                                    :
                                    <Nav.Link className='text-white btn btn-outline-primary rounded-pill' as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
};

export default Header;