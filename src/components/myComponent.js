import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice';

function MyComponent() {
	const counter = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	console.log('1: evaluando el que maneja y tiene renderizado el valor');

	return (
		<div style={{ border: 'violet 2px solid', margin: '20px', padding: '20px' }}>
			<p>Counter: {counter}</p>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	);
}

export default MyComponent;
