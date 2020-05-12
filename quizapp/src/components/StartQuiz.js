import React from 'react'
import QuizCategories from './QuizCategories'

const StartGame = () => {
	return (
		<section id='start' className='text-white text-center mb-5 container'>
			<h1 className='display-3 font-weight-bold'>Trivia Quiz</h1>
			<p className='lead mb-5'>
				Are you a trivia master? Do you know a little about a lot? Put your skills
				to the test and see how much you really know with this quiz! Choose a
				category in which to play the Trivia Quiz from General Knowledge, Animals,
				Entertainment, Geography and many more.
			</p>
			<QuizCategories />
		</section>
	)
}

export default StartGame
