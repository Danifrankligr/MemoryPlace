import React,{useState} from 'react';
import MemoCard from "./MemoCard.js";
import {connect} from "react-redux";
import {FlipCard} from "../../redux/points/pointsActions";
 
export const MainTable = ({Figures,FlipCard}) => {
	const [LocalStage, setLocalStage] = useState(0);

	const HandleFlip = (CardID) =>{
		let Stage = LocalStage;
		if(Stage <= 2)	// Manages which card in this play is being flipped (1st or 2nd).
		{
			Stage++;
			FlipCard(CardID);
			if(Stage === 2)	// Both cards have been flipped.
			{
				Stage++;		// Stage = 3 avoids the attention of unnecessary clicks.
				setTimeout(()=>{		// 1.2 secs delay to reset play.
					FlipCard(CardID);
					Stage = 0;
					setLocalStage(Stage);
				},1200);
			}
			setLocalStage(Stage);
		}
	}
	return (
		<table>
			<tbody>
				<tr>
					{Figures.map((Elm,Ind) => {		// On each row (tr) components are shown
						if(Ind >= 0 && Ind <= 6)		// within these 6 indexes.
						{
							return (	<td key={Elm.id}> 
											{<MemoCard onFlip={(CardID) => HandleFlip(CardID)} Card={Elm} />} 
										</td>)
						}								// Unique key inserted.
						return null;	// return required for .map() requiere un return para cada Elemento.
					})}
				</tr>
				<tr>
					{Figures.map((Elm,Ind) => {		// On each row (tr) components are shown
						if(Ind >= 7 && Ind <= 13)		// within these 6 indexes.
						{
							return (	<td key={Elm.id}> 
											{<MemoCard onFlip={HandleFlip} Card={Elm} />} 
										</td>)
						}								
						return null;	
					})}
				</tr>
				<tr>
					{Figures.map((Elm,Ind) => {		
						if(Ind >= 14 && Ind <= 20)
						{
							return (	<td key={Elm.id}> 
											{<MemoCard onFlip={HandleFlip} Card={Elm} />} 
										</td>)
						}														
						return null;	
					})}
				</tr>
				<tr>
					{Figures.map((Elm,Ind) => {		
						if(Ind >= 21 && Ind <= 27)	
						{
							return (	<td key={Elm.id}> 
											{<MemoCard onFlip={HandleFlip} Card={Elm} />} 
										</td>)
						}														
						return null;	
					})}
				</tr>
				<tr>
					{Figures.map((Elm,Ind) => {		
						if(Ind >= 28 && Ind <= 34)	
						{
							return (	<td key={Elm.id}> 
											{<MemoCard onFlip={HandleFlip} Card={Elm} />} 
										</td>)
						}														
						return null;	
					})}
				</tr>
				<tr>
					{Figures.map((Elm,Ind) => {		
						if(Ind >= 35 && Ind <= 41)	
						{
							return (	<td key={Elm.id}> 
											{<MemoCard onFlip={HandleFlip} Card={Elm} />} 
										</td>)
						}
						return null;	
					})}
				</tr>
			</tbody>
		</table>
	)
}

const mapStateToProps = (state) => ({	// Figures array is received to be shown in screen.
	Figures: state.Cards,
});

const mapDispatchToProps = dispatch => ({		// FlipCard method is received to be casted on any card.
	FlipCard: (CardID) => dispatch(FlipCard(CardID)),
});

export default connect(mapStateToProps,mapDispatchToProps)(MainTable);

