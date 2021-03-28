
export default function StageLogic(DanCards,StageN,SlotN,idNew){

	const Stage = StageN;			// Se avanza a la etapa solicitada desde afuera.
	SlotN = {
		figure: DanCards[idNew].figure,		// Se guarda la figura de la carta volteada.
		id: DanCards[idNew].id,				// Se guarda el id de la carta volteada.
	}
	DanCards[idNew].flipped = true;	// Se voltea la carta indicada.
	DanCards[idNew].visited++;		// Se indica que esta carta ya fue volteada.

	return [DanCards,Stage,SlotN];
}