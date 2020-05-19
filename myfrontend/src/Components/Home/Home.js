import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="homepage">
      <div className="gamelogo">
        <h1>Welcome to MasterMind</h1>
        <img
          className="logo"
          src="/assets/MasterMind-logo.png"
          alt="gamelogo"
        />
        <div className="links">
          <Button className="btn btn-dark btn-lg login-button">
            <Link className="link1" to="/login">
              <FontAwesomeIcon className="far user" icon={faUser} /> Login
            </Link>
          </Button>
          <Button className="btn btn-dark btn-lg register-button">
            <Link className="link2" to="/register">
              <FontAwesomeIcon className="far userplus" icon={faUserPlus} />
              Register
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
