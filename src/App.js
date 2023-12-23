import React from 'react';
import MyComponent from './components/myComponent';
import { OtherComponent } from './components/otherComponent';
import { OtroMasComponent } from './components/otroMasComponent';
import { UnoQueNadaQueVer } from './components/unoQueNadaQueVer';

function App() {
	return (
		<div style={{ border: 'blue 2px solid', margin: '20px' }}>
			<MyComponent></MyComponent>
			<OtherComponent></OtherComponent>
			<OtroMasComponent></OtroMasComponent>
			<UnoQueNadaQueVer></UnoQueNadaQueVer>
		</div>
	);
}

export default App;
