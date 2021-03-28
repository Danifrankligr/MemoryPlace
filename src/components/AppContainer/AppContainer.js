import React from 'react'
	// It holds inside all the app content
export default function AppContainer(props) {
	return (
		<div className="app">
			{props.children}
		</div>
	)
}
