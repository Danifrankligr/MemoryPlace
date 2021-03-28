import React from 'react';		

export const SuccessNotif = ({Right}) => {		// Componente que se renderizará en las notificaciones de éxito.
	return (
		<p style={{color:"yellow",fontWeight:"bold",fontSize:"1.3rem",}}> 
			{`That´s Right! ${Right} point${(Right>1) ? "s" : ""}.`} 
		</p>
	)
}

export const FailureNotif = () => {	// Componente que se renderizará en las notificaciones de cartas antes volteadas.
	return (
		<div style={{color:"black",fontWeight:"bold", margin:"0px"}}>
			<p style={{color:"yellow",fontSize:"1.2rem"}}> Oops!  </p>
			<p> You had seen those before. </p>
		</div>
	)
}
