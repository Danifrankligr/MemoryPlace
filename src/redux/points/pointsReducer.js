import {INCREASE_RIGHT,INCREASE_WRONG,FLIP_CARD,RESET} from "./pointsTypes";
import RandomID from "./modules/RandomID";
import HandleFlip from "./modules/HandleFlip";

const initialState = {
	Right: 0,		// Number of matching card-pairs revealed.
	Wrong: 0,		// Number of repeated card-pairs revealed.
	Cards: [...RandomID()],		// Object array saved here.
								// It must be a function to be able to recalculate.
	Slot1: {},	// The first card of each turn is saved here.
	Slot2: {},	// The second card of each turn is saved here.
	Stage: 0,	// 0: awaiting play	 | 	1: first card played	| 	2: second card played.
};

var Cards;

const pointsReducer = (state = initialState, action) => {
	switch(action.type)
	{
		case INCREASE_RIGHT:
			return {
				...state, 
				Right: state.Right + 1,
			}
		case INCREASE_WRONG:
			return {
				...state, 
				Wrong: state.Wrong + 1,
			}
		case RESET:
			Cards = [...RandomID()];	// card array is recalculated on reset.
			return {
				...initialState,	// initial state is copied, then the new array is added.
				Cards,
				};
			
		case FLIP_CARD:
			var DanCards = [...state.Cards];			// state array is copied.
			var Stage = state.Stage;		// all variables of state are copied to send them to HandleFlip.
			var Slot1 = state.Slot1;		
			var Slot2 = state.Slot2;
			var Right = state.Right;
			var Wrong = state.Wrong;
			const idNew = action.payload;			// id received from click is saved.

					// this action logic is operated in HandleFlip():
			[DanCards,Stage,Slot1,Slot2,Right,Wrong] = HandleFlip(DanCards,Stage,Slot1,Slot2,Right,Wrong,idNew);

			return {
				...state,
				Right, Wrong,
				Cards: DanCards,
				Stage,
				Slot1, Slot2,
			}
		default: return state;
	}
}
export default pointsReducer;
