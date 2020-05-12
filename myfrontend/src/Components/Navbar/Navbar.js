import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar mainNav">
      <Container>
        <Link to="/" className="navbar-brand main-brand">
          <img
            src="assets/MasterMind-logo.png"
            alt="gamelogo"
            style={{ height: '28', width: '50px' }}
          />
          <span className="brand-text"> MasterMind</span>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto main-links">
            <Link to="/about" className="nav-link">
              About
            </Link>

            <Link to="/instructions" className="nav-link">
              How to play?
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
