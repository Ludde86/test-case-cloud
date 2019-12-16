import React from 'react';
import './SideBar.css';

export const SideBar = () => {
	return (
		<div className="sidebar-container">
			<div className="sidebar-header">
				<h3 style={{ margin: '20px' }}>Sweet</h3>
			</div>
			<div className="links-container">
				<div className="sidebar-links">
					<ul>
						<li>
							<a>APPLICATIONS</a>
						</li>
						<li>
							<a>DATA SOURCES</a>
						</li>
						<li>
							<a>USER MANAGEMENT</a>
						</li>
						<li>
							<a>SETTINGS</a>
						</li>
					</ul>
				</div>
				<div className="support-links">
					<ul>
						<li>
							<a>SUPPORT</a>
						</li>
						<li>
							<a>Knowledge base</a>
						</li>
						<li>
							<a>Contact us</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
