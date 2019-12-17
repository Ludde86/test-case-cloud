import React from 'react';
import './ApplicationItem.css';

const ApplicationItem = (props) => {
	return (
		<div className="application-item">
			<div>
				<h4>{props.titleApplication}</h4>
				<span>{props.description}</span>
			</div>

			<button className="btn btn-success">{props.titleButton}</button>
		</div>
	);
};

export default ApplicationItem;
