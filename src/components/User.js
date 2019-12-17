import React from 'react';
import './User.css';
class User extends React.Component {
	state = {
		// exempel när hårdkodad
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
					<button
						className="btn btn-secondary btn-sm dropdown-toggle"
						type="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					/>
				</div>
			</div>
		);
	}
}

export default User;
