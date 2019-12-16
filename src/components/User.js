import React from 'react';
import './User.css';
class User extends React.Component {
	state = {
		user: 'Ludvig',
		userLetters: 'LB'
	};
	render() {
		return (
			<div className="user-container">
				<div className="user-icon">
					<span>{this.state.userLetters}</span>
				</div>
				<div className="user-dropdown-meny">
					<span>{this.state.user}</span>
				</div>
			</div>
		);
	}
}

export default User;
