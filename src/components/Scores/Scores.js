import React from 'react';
import { connect } from 'react-redux';
import {Reset} from "../../redux/points/pointsActions";

export const Scores = (props) => {		// Manages and renders the scores.
	const {Right,Wrong,Reset} = props;
	return (
		<div>
			<h2 style={{fontSize:"1.7rem"}}> 
				Wrong: {Wrong} 
				<span style={{color:"white",marginLeft:"30px",marginRight:"50px"}}
				>Right: {Right}
				</span>  
				<button onClick={Reset} className="ResetButon" > Reset </button>
			</h2>
		</div>
	)
}

const mapStateToProps = (state) => ({		// state variables passed from redux to this component props.
	Right: state.Right,							
	Wrong: state.Wrong,
});

const mapDispatchToProps = dispatch => ({		// redux action passed to the component.
	Reset: () => dispatch(Reset()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Scores);

