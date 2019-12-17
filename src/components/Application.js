import React from 'react';
import ApplicationItem from './ApplicationItem';
import './Application.css';

class Application extends React.Component {
	state = {
		// skulle kunna se ut när vi inte har hårdkodad array -> allApplications
		application: {
			titleApplication: 'Title',
			description: 'Show a description of the Application',
			titleButton: 'Click here'
		},

		allApplications: [
			{ titleApplication: 'application1', description: 'description1', titleButton: 'button1' },
			{ titleApplication: 'application2', description: 'description2', titleButton: 'button2' },
			{ titleApplication: 'application3', description: 'description3', titleButton: 'button3' }
		]
	};
	render() {
		return (
			<div>
				{this.state.allApplications.map((item) => (
					<div className="application-container">
						<ul>
							<ApplicationItem
								titleApplication={item.titleApplication}
								description={item.description}
								titleButton={item.titleButton}
							/>
						</ul>
					</div>
				))}
			</div>
		);
	}
}

export default Application;

/*
<ApplicationItem
					titleApplication={this.state.titleApplication}
					description={this.state.description}
					titleButton={this.state.titleButton}
				/>
*/
