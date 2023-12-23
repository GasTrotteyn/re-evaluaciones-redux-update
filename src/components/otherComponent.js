import React from 'react';
import { useSelector } from 'react-redux';

export const OtherComponent = () => {
	const counter = useSelector((state) => state.counter.value);
	console.log('evaluando el que consulta y muestra en el render');
	return (
		<div style={{ border: 'violet 2px solid', margin: '20px' }}>
			OtherComponent - acá el value es:
			{counter}
		</div>
	);
};
