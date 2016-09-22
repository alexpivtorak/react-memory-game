import React, { Component } from 'react';


const Card = (props) => {
	return (
		<div {...props}>
			<div>
				<div className="card__front"></div>
				<div className="card__back"><span className={props.content}></span></div>
			</div>
		</div>
	);
}

Card.propTypes = {
	className: React.PropTypes.string,
	content:   React.PropTypes.string,
	onClick:   React.PropTypes.func
}

export default Card