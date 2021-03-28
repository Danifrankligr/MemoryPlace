import StageLogic from "./Stages1y2";
import {toast} from "react-toastify";					// Library that handles notifications
import 'react-toastify/dist/ReactToastify.css';	
import {SuccessNotif,FailureNotif} from "./NotiTabs";
		// Funtional Components to render in notifications are imported.
		

export default function HandleFlip(DanCards,Stage,Slot1,Slot2,Right,Wrong,idNew)
{
	if(Stage === 0 && DanCards[idNew].flipped === false)
	{						// On stage cero and no cards flipped.
		[DanCards,Stage,Slot1] = StageLogic(DanCards,1,Slot1,idNew);
				// It advances to stage 1 and perform the necessary modifications.
	}
	else if(Stage === 1 && DanCards[idNew].flipped === false)
	{						// Stage 1 and click on an unflipped card.
		[DanCards,Stage,Slot2] = StageLogic(DanCards,2,Slot2,idNew);
				// It advances to stage 1 and perform the necessary modifications.
		if(Slot1.figure === Slot2.figure)		// Si hubo un acierto.
		{
			Right++;		// Se aumentan los aciertos y se lanza una notificación.
			toast.info(<SuccessNotif Right={Right} />,
				{position:toast.POSITION.TOP_RIGHT, autoClose:1500}
			);		// Blue, yellow letters, 2 seconds, top right.
		}
		else											// If there was no match.
		{
			if(DanCards[Slot1.id].visited > 1 && DanCards[Slot2.id].visited > 1)
			{				// If both cards were previously revealed.
				Wrong++;
				toast.error(<FailureNotif />,
						{position:toast.POSITION.TOP_LEFT, autoClose: 1500}
				);			// Red, 2 seconds , top left.
			}
		}
	}
	else if(Stage > 1)	// Timeout gives a reset turn.
	{
		if(Slot1.figure !== Slot2.figure)		// If there was no match.
		{
			DanCards[Slot1.id].flipped = false;	// Cards go hidden again.
			DanCards[Slot2.id].flipped = false;
		}
		Slot1 = {};
		Slot2 = {};
		Stage = 0;
	}
	return [DanCards,Stage,Slot1,Slot2,Right,Wrong];
}

