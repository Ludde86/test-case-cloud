import React from 'react';
import './SideBar.css';

export const SideBar = () => {
	/*myRef={myRef}*/
	return (
		<div className="sidebar-container">
			<div className="sidebar-header">
				<h3 style={{ margin: '20px' }}>Sweet</h3>
			</div>
			<div className="links-container">
				<div className="sidebar-links">
					<ul>
						<div className="application-count">
							<li>
								<a href="#/">APPLICATIONS</a>
							</li>
						</div>

						<li>
							<a href="#/">DATA SOURCES</a>
						</li>
						<li>
							<a href="#/">USER MANAGEMENT</a>
						</li>
						<li>
							<a href="#/">SETTINGS</a>
						</li>
					</ul>
				</div>
				<div className="support-links">
					<ul>
						<li>
							<a href="#/">SUPPORT</a>
						</li>
						<li>
							<a href="#/">Knowledge base</a>
						</li>
						<li>
							<a href="#/">Contact us</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
