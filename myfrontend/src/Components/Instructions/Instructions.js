import React from 'react';
import './Instructions.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Instructions = () => {
  return (
    <div className="instructions">
      <h1>Here are the instructions</h1>
      <div className="lists">
        <ul>
          <li>
            <FontAwesomeIcon className="fas hand" icon={faCircle} />
            Register if you are a new user
          </li>
          <li>
            {' '}
            <FontAwesomeIcon className="fas hand" icon={faCircle} />
            Login with your username and password
          </li>
          <li>
            {' '}
            <FontAwesomeIcon className="fas hand" icon={faCircle} />
            Select your choice of category for the questions
          </li>
          <li>
            {' '}
            <FontAwesomeIcon className="fas hand" icon={faCircle} />
            Answer 10 questions
          </li>
          <li>
            {' '}
            <FontAwesomeIcon className="fas hand" icon={faCircle} />
            Your correct points and answers of the questions are displayed
          </li>
          <li>
            {' '}
            <FontAwesomeIcon className="fas hand" icon={faCircle} />
            Try again or log out of the game
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
