import React, { Component } from 'react';

class Clicker extends Component {
	constructor(props) {
		super(props);
		this.state = { number : 1 }
		this.getRandom = this.getRandom.bind(this);
	}

	getRandom() {
		let rand = Math.floor(Math.random() * 10) + 1;
		this.setState({ number: rand, isWinner: rand === 7 });
	}

	render() {
		let btn;
		if(this.state.number !==7) {
			btn = <button onClick = {this.getRandom}>Random number</button>
		} else if(this.state.isWinner === true) {
			btn = <h2>YOU'RE THE MAN NOW DAWG!</h2>
		}

		return (
			<div>
				<h1>Number is {this.state.number}</h1>
				{btn}
			</div>
		);
	}
}

export default Clicker;
