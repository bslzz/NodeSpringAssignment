import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="homepage">
      <h1>Welcome to MasterMind</h1>
      <div className="gamelogo">
        <img className="logo" src="assets/MasterMind-logo.png" alt="gamelogo" />
        <div className="links">
          <Link className="link1" to="/login">
            <FontAwesomeIcon className="far user" icon={faUser} /> Login
          </Link>
          <Link className="link2" to="/register">
            <FontAwesomeIcon className="far userplus" icon={faUserPlus} />
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
