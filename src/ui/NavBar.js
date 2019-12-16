import React from 'react';
import './NavBar.css';

export const NavBar = () => {
	return (
		<div className="navbar-container">
			<div className="user-icon">
				<span>US</span>
			</div>
			<div className="user-dropdown-meny">
				<span>User</span>
			</div>
		</div>
	);
};

export default NavBar;
