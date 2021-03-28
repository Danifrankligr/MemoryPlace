import React from 'react';
import Confetti from "react-confetti";
import {useWindowSize} from "react-use";
import {connect} from "react-redux";

const DanConfetti = (props) => {
	const {width:WindowWidth,height:WindowHeight} = useWindowSize();
	let Condition = false;
	if(props.Right > 20) Condition = true;	// if Max score (21) is reached.
	return (											// Confetti is released
		<div>
		{Condition && <Confetti
			width={WindowWidth} height={WindowHeight}
			numberOfPieces={200}
			colors={["yellow","magenta","cyan","darkorange","wheat","lightblue"]}		
		/>}
		</div>
	)
}

const mapStateToProps = state => ({
	Right: state.Right,	// Global counter
});

export default connect(mapStateToProps)(DanConfetti);