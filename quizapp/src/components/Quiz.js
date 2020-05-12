import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Question from './Question'
import Spinner from './Spinner'

class Quiz extends Component {
	state = {
		loaded: false,
		questions: [],
		current: 0,
		score: 0,
		quizOver: false
	}

	componentDidMount() {
		this.getQuestions()
	}

	getQuestions = () => {
		const id = this.props.location.state ? this.props.location.state.id : 9
		const url = `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=easy&type=multiple`
		axios
			.get(url)
			.then(response => {
				const questions = response.data.results.map(data => {
					return {
						question: data.question,
						correct_answer: data.correct_answer,
						incorrect_answers: data.incorrect_answers,
						user_answer: '',
						correct: ''
					}
				})
				this.setState({ loaded: true, questions: questions })
			})
			.catch(error => console.error(error))
	}

	handleResult = res => {
		if (res.correct) {
			this.setState(prevState => ({ score: prevState.score + 1 }))
		}
		this.saveUserAnswer(res)
		this.showNextQuestion()
	}

	saveUserAnswer = res => {
		const i = this.state.current
		const { correct, answer } = res
		const updatedQuestions = [...this.state.questions]
		updatedQuestions[i] = {
			...updatedQuestions[i],
			user_answer: answer,
			correct: correct
		}
		this.setState({ questions: updatedQuestions })
	}

	showNextQuestion = () => {
		if (this.state.current === this.state.questions.length - 1) {
			this.setState({ quizOver: true })
			return
		}
		this.setState(prevState => ({ current: prevState.current + 1 }))
	}

	render() {
		const { current, questions, quizOver, loaded, score } = this.state
		const category = this.props.location.state
			? this.props.location.state.category
			: 'General knowledge'
		const redirectObj = {
			pathname: '/result',
			state: { result: { questions, score } }
		}

		if (quizOver) {
			return <Redirect to={redirectObj} />
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
		)
	}
}

export default Quiz
