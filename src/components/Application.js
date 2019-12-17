import React from 'react';
import ApplicationItem from './ApplicationItem';
import './Application.css';

class Application extends React.Component {
	state = {
		// hur det skulle kunna se ut när vi inte har hårdkodad array -> allApplications
		application: {
			id: '',
			titleApplication: 'Title',
			description: 'Show a description of the Application',
			titleButton: 'Click here'
		},

		allApplications: [
			{ titleApplication: 'application1', description: 'description1', titleButton: 'button1' },
			{ titleApplication: 'application2', description: 'description2', titleButton: 'button2' },
			{ titleApplication: 'application3', description: 'description3', titleButton: 'button3' },
			{ titleApplication: 'application4', description: 'description4', titleButton: 'button4' }
		],

		count: 0
	};

	// myRef = React.createRef();

	// visa antalet applikationer
	componentDidMount() {
		this.setState({
			count: this.state.allApplications.length
		});
	}

	render() {
		return (
			<React.Fragment>
				<div className="applications-count">{this.state.count}</div>
				<div className="application-container">
					{this.state.allApplications.map((item, index) => (
						<div className="application-item-container" key={index}>
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
			</React.Fragment>
		);
	}
}

export default Application;
