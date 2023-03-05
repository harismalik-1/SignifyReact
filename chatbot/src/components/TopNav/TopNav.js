import React from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import Chatbot from '../Charbot/Chatbot';
import './TopNav.css';
import profilePic from './Chatbot.png'

//<img src={profilePic} alt="Profile" style={{ width: "200px", height: "auto",  }} />

function TopNav() {
  return (
    <Navbar className="top-nav" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <div className="logo" style={{ marginRight: "auto" }}>
        <img src={profilePic} alt="Profile" style={{ width: "200px", height: "auto", marginRight: "950px"}} />
      </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNav;
