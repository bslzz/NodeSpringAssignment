import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const useAudio = () => {
  const [audio] = useState(new Audio('/assets/bensound-littleidea.mp3'));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  });

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  });

  return [playing, toggle];
};

const NavHeader = () => {
  const [playing, toggle] = useAudio('/assets/bensound-littleidea.mp3');
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar mainNav">
      <Container>
        <Link to="/" className="navbar-brand main-brand">
          <img
            src="assets/game-logo.png"
            alt="gamelogo"
            style={{ width: '200px' }}
          />
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto main-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/instructions" className="nav-link">
              How to play?
            </Link>
            <FontAwesomeIcon
              onClick={toggle}
              className="far music"
              icon={faMusic}
            >
              {playing ? 'Pause' : 'Play'}
            </FontAwesomeIcon>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
