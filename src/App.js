import React from 'react';
import './App.css';
import Side from './components/Side';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
	return (
		<div className="App">
			<Side />
			<Main />
			<Nav />
		</div>
	);
}

export default App;
