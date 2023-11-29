import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../data/Images/logoImage.png'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
  <BootstrapNavbar bg="light" expand="lg">
    <BootstrapNavbar.Brand as={Link} to="/">
    {' '}
    <img
              alt=""
              src={Logo}
              className="d-inline-block align-top"
            />{' '}
            <span className='logoName'>Crowndevour</span></BootstrapNavbar.Brand>
  <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
  <BootstrapNavbar.Collapse id="basic-navbar-nav">
    <Nav className="">
      <Nav.Link as={Link} to="/locations"  className={"underline" + (url === "/locations" ?" active" : "")}>Locations</Nav.Link>
      <Nav.Link as={Link} to="/blogs"  className={"underline" + (url === "/blogs" ?" active" : "")}>Blogs</Nav.Link>
      <Nav.Link as={Link} to="/thelas-near-location"  className={"underline" + (url === "/thelas-near-location" ?" active" : "")}>Register</Nav.Link>
      <Nav.Link as={Link} to="/about"  className={"underline" + (url === "/about" ?" active" : "")}>About</Nav.Link>
      <Nav.Link as={Link} to="/contact"  className={"underline" + (url === "/contact" ?" active" : "")}>Contact</Nav.Link>
      <Nav.Link as={Link} to="/user-profile"  className={"underline" + (url === "/user-profile" ?" active" : "")}>Author</Nav.Link>
    </Nav>
  </BootstrapNavbar.Collapse>  
</BootstrapNavbar>
  );
};

export default Navbar;
