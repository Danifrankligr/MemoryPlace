const BaseNum = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,
						12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20];
const BaseCol = ["yellow","red","blue","green","purple","darkcyan","darkorange","chartreuse",
						"wheat","deeppink","coral","gold","orchid","navy","salmon","sienna",
						"darkorange","teal","tomato","cyan","red"];

var RandomCol;
var RandomArray;
var VerifCol;
var Verif;
var i,Possible;		// índices.

function RandomID()
{
	RandomCol = new Array(42);
	RandomArray = new Array(42);
	VerifCol = new Set();
	Verif = new Set();

	for(i=0;i<RandomCol.length;i+=2)		// Se recorre el array de colores.
	{
		do{
			Possible = Math.round(Math.random() * 20);	// Se busca un color aleatorio (son 21 colores
		}																// guardados en BaseCol[]).
		while(VerifCol.has(Possible))		// Mientras el color esté en el Set VerifCol, se repite.
		VerifCol.add(Possible);			// Si no se encuentra en el set, se añade y se usa.
		RandomCol[i] = BaseCol[Possible];		// La pareja de figuras tiene el mismo color.
		RandomCol[i+1] = BaseCol[Possible];		// 0 y 1,  2 y 3.... etc
	}
	for(i=0;i<RandomArray.length;i++)	// Se recorre el Array que guardará las figuras y colores.
	{
		do{
			Possible = Math.round(Math.random() * 41);	// Se busca una figura aleatoria.
		}
		while(Verif.has(Possible))		// Mientras el índice de la figura esté en el Set Verif, se repite.
		Verif.add(Possible);			// Si no se encuentra en el set, se añade y se usa.
		RandomArray[i] = {		/**  Se usa un objeto para guardar tanto la figura como el color.*/
			id: i,
			flipped: false,
			visited: 0,
			figure: BaseNum[Possible], 		// La Figura
			color: RandomCol[Possible],		// El Color      Ambos con el mismo índice.
		};
	}
	return RandomArray;
}

export default RandomID;
