import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Question from './Question';
import Spinner from './Spinner';

class Quiz extends Component {
  state = {
    loaded: false,
    questions: [],
    current: 0,
    score: 0,
    quizOver: false,
    time: {}
  };

  componentDidMount() {
    this.getQuestions();
    this.setTimer();
  }


  getQuestions = () => {
    const id = this.props.location.state ? this.props.location.state.id : '';
    const url = `https://opentdb.com/api.php?amount=20&category=${id}&easy=difficulty&type=multiple`;
    axios
      .get(url)
      .then((response) => {
        const questions = response.data.results.map((data) => {
          return {
            question: data.question,
            correct_answer: data.correct_answer,
            incorrect_answers: data.incorrect_answers,
            user_answer: '',
            correct: '',
          };
        });
        this.setState({ loaded: true, questions: questions });
      })
      .catch((error) => console.error(error));
  };

  setTimer = () => {
    const countDownTime = Date.now() + 12000;
    this.interval = setInterval(() => {
        let now = new Date();
        let distance = countDownTime - now;

        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const timeLeft = seconds;
        console.log(timeLeft);
        document.getElementById("seconds").innerHTML = seconds + " seconds" 

        if (distance <= 0) {
            clearInterval(this.interval);
            this.setState({
                time: {
                    seconds: 0
                }
            }, () => {
                this.setTimer()
                this.showNextQuestion();
            });
        }
    }, 1000);

  }
  //alert('Timeout!')


  handleResult = (res) => {
    if (res.correct) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }
    this.saveUserAnswer(res);
    this.showNextQuestion();
  };

  saveUserAnswer = (res) => {
    const i = this.state.current;
    const { correct, answer } = res;
    const updatedQuestions = [...this.state.questions];
    updatedQuestions[i] = {
      ...updatedQuestions[i],
      user_answer: answer,
      correct: correct,
    };
    this.setState({ questions: updatedQuestions });
  };

  showNextQuestion = () => {
    if (this.state.current === this.state.questions.length - 1) {
      this.setState({ quizOver: true });
      return;
    }
    this.setState((prevState) => ({ current: prevState.current + 1 }));
  };

  
  render() {
    const { current, questions, quizOver, loaded, score, timeLeft } = this.state;
    const category = this.props.location.state
      ? this.props.location.state.category
      : '';
    const redirectObj = {
      pathname: '/result',
      state: { result: { questions, score } },
    };

    if (quizOver) {
      let audio = new Audio('/assets/quizresult.mp3');
      audio.play();

      return <Redirect to={redirectObj} />;
    }

    
    return loaded ? (
      <>
       <h5>Time left: </h5>
   <h5 id="seconds"></h5>
      <Question
        question={questions[current]}
        number={current}
        onHandleResult={this.handleResult}
        category={category}
      />
      
      </>
    ) : 
      <Spinner />
    ;
  }
}

export default Quiz;
