import React from 'react';
import './ApplicationItem.css';

const ApplicationItem = (props) => {
	return (
		<div className="application-item">
			<div className="applacation-item-text">
				<h4>{props.titleApplication}</h4>
				<span>{props.description}</span>
			</div>
			<div>
				<button className="btn btn-success">{props.titleButton}</button>
			</div>
		</div>
	);
};

export default ApplicationItem;
