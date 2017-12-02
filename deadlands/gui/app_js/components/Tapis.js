import React from 'react'
import Card from './Card'
import Actions from '../actions/Action'
import Store from '../stores/Store'

function getCardsState() {
	return Store.getCards()
}

class Tapis extends React.Component {
	constructor(props) {
		super(props)
		this._onChange = this._onChange.bind(this)
		this.state = getCardsState()
	}

	componentWillMount() {
		Store.removeChangeListener(this._onChange)
	}

	componentDidMount() {
		Store.addChangeListener(this._onChange)
		this._onInit()
	}

	componentWillUnmount() {
		Store.removeChangeListener(this._onChange)
	}

	createCard(card) {
		return(<Card key={card.color+card.value} color={card.color} value={card.value} flipped={card.flipped}>{card.coordination}{card.dice}</Card>)
	}

	render() {
		return(
			<div id="tapis">
				<div>
					Aprés avoir cliqué sur le bouton calculer vous aller voir dans les differentes cases les valeurs qui ont étés tiré au sort. Il faut en enlever 2.
					<button onClick={this._onDistribute}>distribuer</button>
				</div>
				carte:
				<div className="line">
					{this.state.cards.map(this.createCard)}
					<div className="spacer"></div>
				</div>
			</div>
		)
	}

	_onInit() {
		Actions.resetDistribution()
	}

	_onDistribute() {
		Actions.distributeCards()
	}

	_onChange() {
		this.setState(getCardsState())
	}
}

export default Tapis
