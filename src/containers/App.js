import React, {Component} from 'react';

// Utils
import shuffle from 'shuffle-array';
import deepCopy from '../utils/deepCopy';

// Data
import Data from '../data/data';

// Components
import Cards from '../components/Cards';




let cards = Data;
cards.push(...cards);
let copy = deepCopy(cards);

let tableCards = shuffle(copy);
// let tableCards = copy;


class App extends React.Component {
	constructor() {
		super();
		this.updateHandle = this.updateHandle.bind(this);
		this.state = {
			tableCards
		};
	}

	resetCounter() {
		setTimeout( () => {
			let stateCopy = this.state.tableCards;
			stateCopy.forEach( el => {
				el.shown = false;
			});
			this.setState({
				tableCards: stateCopy
			});
		}, 1000);
	}

	updateHandle(index, e) {

		let stateCopy = this.state.tableCards;
		stateCopy[index].shown = true;

		let shownCards = stateCopy.filter( el => {
			if (el.shown) return el.shown
		});

		if (shownCards.length === 2) {
			shownCards.splice(0, shownCards.length)

			let chosenCards = [];
			let indexArr = [];
			stateCopy.forEach( (el, index) => {
				if (el.shown === true) {
					indexArr.push(index);
					chosenCards.push(el.content);
				}
			});
			if (chosenCards[0] === chosenCards[1]) {
				indexArr.forEach( index => {
					stateCopy[index].picked = true;
					stateCopy[index].shown = false;
				});
				let pickedCards = stateCopy.filter( el => {
					if (el.picked) return el.picked
				});
				if (pickedCards.length === cards.length) {
					stateCopy.win = 'Game over! Congratulations! You won!';
				}

			} else {
				this.resetCounter();
			}
		}

		this.setState({
			tableCards: stateCopy
		});
	}

	render() {
		let cards = this.state.tableCards;

		return (
			<div className="container">
				<h2>
					&nbsp;{cards.win}
					<small>click to reveal the cards and form pairs</small>
				</h2>
				<Cards
					cards={cards}
					updateHandle={this.updateHandle}
				/>
			</div>
		);
	}


}


export default App