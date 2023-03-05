import React from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import './TopNav.css';
import profilePic from './Logo.png'



function TopNav() {
  return (
    <Navbar className="top-nav" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <div className="logo" style={{ marginRight: "auto" }}>
        <img src={profilePic} alt="Profile" style={{ width: "120px", height: "auto", marginRight: "1000px"}} />
      </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNav;
