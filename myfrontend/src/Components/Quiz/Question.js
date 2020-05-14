import React from 'react';
import Parser from 'html-react-parser';
import ProgressBar from '../ProgressBar/ProgressBar';
import AnswerOptions from '../AnswerOptions/AnswerOptions';
import './Question.css';
import { Link } from 'react-router-dom';

const Question = (props) => {
  const { question, incorrect_answers, correct_answer } = props.question;
  const options = [...incorrect_answers, correct_answer];
  options.sort(() => 0.5 - Math.random());

  return (
    <>
      <Link to="/" className="nav-link logout">
        Logout
      </Link>
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
      ;
    </>
  );
};

export default Question;
