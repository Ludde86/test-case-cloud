import React from 'react';
import './MainContainer.css';
import Application from '../components/Application';

export const MainContainer = () => {
	return (
		<div className="main-container">
			<div className="main-header-text">
				<h1 style={{ fontWeight: '600' }}>Let's Get Started</h1>
				<span>What do you want to do?</span>
			</div>

			<div className="main-content">
				<Application />
			</div>
		</div>
	);
};

export default MainContainer;
