import React from 'react';
import { Link } from 'react-router-dom';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../data/Images/logoImage.png'
import './Navbar.css'

const Navbar = () => {
  return (
  <BootstrapNavbar bg="light" expand="lg">
    <BootstrapNavbar.Brand as={Link} to="/">
    {' '}
    <img
              alt=""
              src={Logo}
              className="d-inline-block align-top"
            />{' '}
            Crowndevour</BootstrapNavbar.Brand>
  <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
  <BootstrapNavbar.Collapse id="basic-navbar-nav">
    <Nav className="">
      <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      {/* <Nav.Link as={Link} to="/about">About</Nav.Link> */}
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      {/* <Nav.Link as={Link} to="/user-profile">User Profile</Nav.Link> */}
      <Nav.Link as={Link} to="/thelas-near-location/LOCATION_ID">Register Thelas Near Location</Nav.Link>
    </Nav>
  </BootstrapNavbar.Collapse>  
</BootstrapNavbar>
  );
};

export default Navbar;
