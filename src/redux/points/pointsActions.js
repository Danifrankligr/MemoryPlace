import {INCREASE_RIGHT,INCREASE_WRONG,FLIP_CARD,RESET} from "./pointsTypes";

	// Action creators for redux:
export const IncreaseRight = () => {
	return {type: INCREASE_RIGHT}
}

export const IncreaseWrong = () => {
	return {type: INCREASE_WRONG}
}

export const Reset = () => {
	return {type: RESET}
}

export const FlipCard = (CardID) => {
	return {
		type: FLIP_CARD,
		payload: CardID,
	}
}

