import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import StartQuiz from './components/StartQuiz'
import Quiz from './components/Quiz'
import Result from './components/Result'

class App extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path='/' component={StartQuiz}></Route>
					<Route path='/quiz' component={Quiz}></Route>
					<Route path='/result' component={Result}></Route>
					<Redirect to='/' />
				</Switch>
			</HashRouter>
		)
	}
}

export default App
