import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import categories from '../modules/categories'

class QuizCategories extends Component {
	state = {
		name: '',
		id: '',
		startQuiz: false
	}

	handleOnSubmit = e => {
		e.preventDefault()
		if (this.state.id) {
			this.setState({ startQuiz: true })
		}
	}

	handleChange = e => {
		const { value, options, selectedIndex } = e.target
		this.setState({
			name: options[selectedIndex].innerHTML,
			id: value
		})
	}

	render() {
		const redirectObj = {
			pathname: '/quiz',
			state: { id: this.state.id, category: this.state.name }
		}

		const options = categories.map(category => (
			<option value={category.id} key={category.id}>
				{category.name}
			</option>
		))

		return this.state.startQuiz ? (
			<Redirect to={redirectObj} />
		) : (
			<form className='input-group' onSubmit={this.handleOnSubmit}>
				<select
					className='custom-select'
					aria-label='Choose a quiz category'
					onChange={this.handleChange}>
					<option defaultValue>Choose a category...</option>
					{options}
				</select>
				<div className='input-group-append'>
					<button className='btn btn-primary' type='submit'>
						Start quiz
					</button>
				</div>
			</form>
		)
	}
}

export default QuizCategories
