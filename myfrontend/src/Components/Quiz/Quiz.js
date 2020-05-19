import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Question from "./Question";
import Spinner from "./Spinner";
import { QuizCategories } from "../Indexwheel/indexwheel";

class Quiz extends Component {
  state = {
    loaded: false,
    questions: [],
    current: 0,
    score: 0,
    quizOver: false,
  };

  componentDidMount() {
    const { category } = this.props.match.params;
    this.getQuestions(category);
  }

  getQuestions = (category) => {
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&easy=difficulty&type=multiple`;
    axios
      .get(url)
      .then((response) => {
        const questions = response.data.results.map((data) => {
          return {
            question: data.question,
            correct_answer: data.correct_answer,
            incorrect_answers: data.incorrect_answers,
            user_answer: "",
            correct: "",
          };
        });
        this.setState({ loaded: true, questions: questions });
      })
      .catch((error) => console.error(error));
  };

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
    const { current, questions, quizOver, loaded, score } = this.state;
    const category = this.props.match.params.category
      ? QuizCategories.find(
          (item) => item.id === parseInt(this.props.match.params.category)
        ).name
      : "";

    const redirectObj = {
      pathname: "/result",
      state: { result: { questions, score } },
    };

    if (quizOver) {
      let audio = new Audio("/assets/quizresult.mp3");
      audio.play();

      return <Redirect to={redirectObj} />;
    }

    return loaded ? (
      <Question
        question={questions[current]}
        number={current}
        onHandleResult={this.handleResult}
        category={category}
      />
    ) : (
      <Spinner />
    );
  }
}

export default Quiz;
