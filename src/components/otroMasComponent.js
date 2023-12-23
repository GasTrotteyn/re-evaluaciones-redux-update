import React from 'react';
import { useSelector } from 'react-redux';

export const OtroMasComponent = () => {
	const counter = useSelector((state) => state.counter.value);
	console.log('evaluando el que solo consulta');
	return (
		<div style={{ border: 'violet 2px solid', margin: '20px', padding: '20px' }}>
			otro más, uno que solo consulta pero no usa el valor
			<button
				onClick={() => {
					console.log('tiro un log con el click, no uso Redux');
				}}
				style={{ border: 'grey 2px solid', margin: '20px' }}>
				solamente tiro un log
			</button>
		</div>
	);
};
