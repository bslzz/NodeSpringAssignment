import React from 'react'

const ProgressBar = props => {
	return (
		<div className='progress mb-4'>
			<div
				className='progress-bar progress-bar-striped progress-bar-animated'
				role='progressbar'
				aria-valuenow={props.number}
				aria-valuemin='0'
				aria-valuemax='100'
				style={{ width: props.number + '%' }}></div>
		</div>
	)
}

export default ProgressBar
