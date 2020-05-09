import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Link
          to="/"
          className="navbar-brand brand"
          style={{ fontSize: '2rem', fontFamily: 'MedievalSharp' }}
        >
          <img
            src="assets/MasterMind-logo.png"
            alt="gamelogo"
            style={{ height: '50px', width: '50px' }}
          />
          MasterMind
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" style={{ fontSize: '1.2rem' }}>
            <Link to="/about" className="nav-link" style={{ color: '#000' }}>
              About
            </Link>
            <Link
              to="/instructions"
              className="nav-link"
              style={{ color: '#000' }}
            >
              How to play
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
