import React from 'react';

export const UnoQueNadaQueVer = () => {
	console.log('4: evaluando el que no consulta ni muestra ni nada');
	return (
		<div style={{ border: 'violet 2px solid', margin: '20px', padding: '20px' }}>
			un colgado que nada que ver
			<button
				onClick={() => {
					console.log('tiro un log con el click, no uso Redux, ni lo consulto en este componente');
				}}
				style={{ border: 'grey 2px solid', margin: '20px' }}>
				botón tira-logs
			</button>
		</div>
	);
};
