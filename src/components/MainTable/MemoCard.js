import React from 'react';
import {connect} from "react-redux";
import {IconContext} from "react-icons";
import {	BsAlarm,BsFillBarChartFill,BsFillBrightnessHighFill,BsGem,
			BsLayersFill,BsHammer,BsFillDropletFill,BsEnvelope,BsMoon,
			BsFillLightningFill,BsFillMicFill,BsWrench,BsBullseye,
			BsFillPieChartFill,BsServer,BsFillUnlockFill,BsFlagFill,
			BsFillVolumeUpFill,BsArrowLeftRight,BsGeoAlt,BsMusicNoteBeamed
} from "react-icons/bs";

const Iconos = [
			<BsHammer/>,<BsAlarm/>,<BsFillBarChartFill/>,<BsFillBrightnessHighFill/>,
			<BsLayersFill/>,<BsFillDropletFill/>,<BsEnvelope/>,<BsMoon/>,<BsGem/>,
			<BsFillLightningFill/>,<BsFillMicFill/>,<BsWrench/>,<BsBullseye/>,
			<BsFillPieChartFill/>,<BsServer/>,<BsFillUnlockFill/>,<BsFlagFill/>,
			<BsFillVolumeUpFill/>,<BsArrowLeftRight/>,<BsGeoAlt/>,<BsMusicNoteBeamed/>
];

export const MemoCard = (props) => {
	const {Right,Card,DanCards} = props;	// Card comes as prop and DanCards from redux state.
	const Danistilo = {
		border:(Right > 20) ? "solid #fcff4d 2px" : "",
	};
	const HandleClick = () => {
		if(!DanCards[Card.id].flipped)		// Card is revealed on click.
		{
			props.onFlip(Card.id);
		}
	}

	return ( 
		<div onClick={HandleClick}
			className="MemoCard" style={Danistilo}
		>
		{(Card.flipped)	// Conditional render of a card.
			?
				<IconContext.Provider value={{size:"3.5rem",color:Card.color}}>
					{Iconos[Card.figure]}
				</IconContext.Provider>
			:
				<div className="flippedCard">
				</div>
		}
		</div>
	)
	
}

const mapStateToProps = (state) => ({
	DanCards: state.Cards,
	Right: state.Right,
})

export default connect(mapStateToProps)(MemoCard);

