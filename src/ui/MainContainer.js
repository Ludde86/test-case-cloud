import React from 'react';
import './MainContainer.css';
import Application from '../components/Application';

export const MainContainer = () => {
	return (
		<div className="main-container">
			<h1>Let's Get Started</h1>
			<span>What do you want to do today?</span>
			<div className="main-content">
				<Application />
			</div>
		</div>
	);
};

export default MainContainer;
