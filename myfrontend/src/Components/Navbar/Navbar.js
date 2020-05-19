import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

// const clickHandler = (e) => {
//   e.preventDefault();
//   const result = window.confirm('Are you sure you want to log out?');

//   result
//     ? axios({
//         url: '/logout',
//         method: 'GET',
//       })
//         .then((response) => {
//           this.props.history.push('/');
//           const isAuthenticated = response.data.isAuthenticated;
//           window.localStorage.removeItem('isAuthenticated', isAuthenticated);
//         })
//         .catch((error) => {
//           console.log({
//             msg: 'You have logged out with an error:' + error,
//           });
//         })
//     : console.log('Not logged out');
// };
const useAudio = () => {
  const [audio] = useState(new Audio("/assets/bensound-littleidea.mp3"));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  });

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  });

  return [playing, toggle];
};

const NavHeader = () => {
  const [playing, toggle] = useAudio("/assets/bensound-littleidea.mp3");
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar mainNav">
      <Container>
        <Link to="/" className="navbar-brand main-brand">
          <img
            src="assets/MasterMind-logo.png"
            alt="gamelogo"
            style={{ height: "28", width: "50px" }}
          />
          <span className="brand-text"> MasterMind</span>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto main-links">
            <FontAwesomeIcon
              onClick={toggle}
              className="far music"
              icon={faMusic}
            >
              {playing ? "Pause" : "Play"}
            </FontAwesomeIcon>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
