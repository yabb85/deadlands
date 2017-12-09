import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import * as actions from '../redux/action'

class Tapis extends React.Component {
	constructor(props) {
		super(props)
		this.createCard = this.createCard.bind(this)
		this._onDistribute = this._onDistribute.bind(this)
	}

	createCard(card) {
		return(<Card key={card.get('color')+card.get('figure')} card={card} flip={this.props.toggleCard}>{card.get('coordination')}{card.get('dice')}</Card>)
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
					{this.props.cards.map(this.createCard)}
					<div className="spacer"></div>
				</div>
			</div>
		)
	}

	_onDistribute() {
		this.props.resetDistribution()
		this.props.distributeCards()
	}
}

export default connect(
	function mapStateToProps(state) {
		return {cards: state.cards}
	},
	function mapDispatchToProps(dispatch) {
		return {
			distributeCards: () => {
				fetch("/distribute")
					.then(function(response) {
						return response.json()
					})
					.then(async function(data) {
						dispatch(actions.distributeCards(data))
					});
			},
			resetDistribution: () => {
				dispatch(actions.resetDistribution())
			},
			toggleCard: (item) => {
				dispatch(actions.flip(item))
			}
		}
	}
)(Tapis)
