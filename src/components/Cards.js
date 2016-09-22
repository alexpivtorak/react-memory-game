import React, { Component } from 'react';

// Utils
import cx from 'react-classset';

// Components
import Card from './Card';

const Cards = ({cards, updateHandle}) => {
	var allCards = cards.map(function(card, index) {
		let classes = cx({
			'col-xs-3': true,
			'card': true,
			'is-hidden': !card.shown,
			'is-shown':  card.shown,
			'is-picked': card.picked
		});
		return (
			<Card
				className={classes}
				content={card.content}
				index={index}
				onClick={(e) => updateHandle(index, e)}
				key={index}
			/>
		)
	}, this);

	// Defining columns
	var rows = allCards.length / 4;

	return (
		<div>
			{
				[...Array(rows)].map( (item, index) => {
					let cardsPiece = allCards.slice(index*4, (index+1) * 4);
					return (
						<div
							className="row"
							key={index}
						>
							{ cardsPiece }

						</div>
					)
				})
			}
		</div>
	);
}

export default Cards