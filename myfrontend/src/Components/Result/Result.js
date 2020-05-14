import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { ResultAnswers as Answers } from './ResultAnswers';
import ProgressBar from '../ProgressBar/ProgressBar';
import './Result.css';

const Result = (props) => {
  const [showAnswers, setShowAnswers] = useState(false);
  const [newGame, setNewGame] = useState(false);

  if (!props.location.state) {
    return <Redirect to="/" />;
  }

  const { questions, score } = props.location.state.result;

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  return newGame ? (
    <Redirect to="/spinner" />
  ) : (
    <>
      <Link to="/" className="nav-link logout">
        Logout
      </Link>
      <section className="container resultbox">
        <div className="card mb-5 shadow-sm">
          <div className="card-body mainresult">
            <h2 className="card-title">
              Congratulations! You have completed the quiz.
            </h2>
            <ProgressBar number="100" />
            <h3 className="card-subtitle mb-4">
              You got {score} out of {questions.length} questions right.
            </h3>

            <button className="btn btn-secondary mr-2" onClick={toggleAnswers}>
              Show answers
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setNewGame(true)}
            >
              Start new quiz
            </button>

            <Answers showAnswers={showAnswers} questions={questions} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Result;