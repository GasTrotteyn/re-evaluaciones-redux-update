import React from 'react';
import { useSelector } from 'react-redux';

export const OtroMasComponent = () => {
	const counter = useSelector((state) => state.counter.value);
	console.log('evaluando el que solo consulta');
	return (
		<div style={{ border: 'violet 2px solid', margin: '20px' }}>
			otro más, uno que solo consulta pero no usa el valor - acá el value es:
		</div>
	);
};
