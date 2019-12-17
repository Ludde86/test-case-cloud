import React from 'react';
import './App.css';
import SideBar from './ui/SideBar';
import MainContainer from './ui/MainContainer';
import NavBar from './ui/NavBar';

function App() {
	return (
		<div className="App">
			<div className="app-container">
				<SideBar />
				<div className="nav-main-container">
					<NavBar />
					<MainContainer />
				</div>
			</div>
		</div>
	);
}

export default App;
