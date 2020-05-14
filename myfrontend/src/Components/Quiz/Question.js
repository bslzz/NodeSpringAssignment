import React from 'react';
import Parser from 'html-react-parser';
import ProgressBar from '../ProgressBar/ProgressBar';
import AnswerOptions from '../AnswerOptions/AnswerOptions';
import './Question.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const clickHandler = (e) => {
  e.preventDefault();
  const result = window.confirm('Are you sure you want to log out?');

  result
    ? axios({
        url: '/logout',
        method: 'POST',
      })
        .then((response) => {
          const isAuthenticated = response.data.isAuthenticated;
          window.localStorage.removeItem('isAuthenticated', isAuthenticated);

          this.props.history.push('/');
          return false;
        })
        .catch((error) => {
          console.log({
            msg: 'You have logged out with an error:' + error,
          });
        })
    : console.log('Not logged out');
};

const Question = (props) => {
  const { question, incorrect_answers, correct_answer } = props.question;
  const options = [...incorrect_answers, correct_answer];
  options.sort(() => 0.5 - Math.random());

  return (
    <>
      <div className="container questionbox">
        <div className="card m-5 shadow-sm">
          <div className="card-body mainquestion">
            <h2 className="card-title text-muted">
              {props.category} Quiz | Question {props.number + 1}
            </h2>
            <ProgressBar number={props.number * 5} />
            <h3 className="card-subtitle mb-3">{Parser(question)}</h3>
            <AnswerOptions
              options={options}
              correct={correct_answer}
              onHandleResult={props.onHandleResult}
            />
          </div>
        </div>
      </div>
      <Link className="nav-link logout" to="/logout" onClick={clickHandler}>
        LogOut
      </Link>
      ;
    </>
  );
};

export default Question;
