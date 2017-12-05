import React from 'react'
import Actions from '../actions/Action'
import Store from '../stores/Store'

function getProfilState() {
	return Store.getProfil()
}

function getCardsState() {
	return Store.getCards()
}


class Caracteristics extends React.Component {
	constructor(props) {
		super(props)
		var profil = getProfilState()
		var cards = getCardsState()
		this.state = {
			dice_value: '',
			value: '',
			color: '',
			current: {},
			profil: profil,
			cards: cards.cards
		}
		this.createCard = this.createCard.bind(this)
		this._onChange = this._onChange.bind(this)
	}

	componentWillMount() {
		Store.removeChangeListener(this._onChange)
	}

	componentDidMount() {
		Store.addChangeListener(this._onChange)
		document.onmousemove = this.handlerMM;
	}

	componentWillUnmount() {
		Store.removeChangeListener(this._onChange)
	}

	createCard(element) {
		if (element.selected) {
			var new_selection = {color: element.color, value: element.value, dice_value: element.coordination + element.dice}
			return(<div key={element.color + element.value}className={"dice " + element.dice} style={{ filter: element.selected ? 'opacity(100%)' : 'opacity(50%)' }} onClick={this._onSelect.bind(this, new_selection)}>{element.coordination}</div>)
		}
	}

	render() {
		return(
			<div className="container">
				<div className="dices">
					{this.state.cards.map(this.createCard)}
				</div>
				<form className="profil">
					<fieldset>
						<legend>Traits mentaux </legend>
						<label>
							<span>Perception:</span>
							<input type="text" value={this.state.profil.perception} onClick={this._onDeposit.bind(this, 'perception')}/>
						</label>
						<label>
							<span>Connaissance:</span>
							<input type="text" value={this.state.profil.connaissance} onClick={this._onDeposit.bind(this, 'connaissance')}/>
						</label>
						<label>
							<span>Charisme:</span>
							<input type="text" value={this.state.profil.charisme} onClick={this._onDeposit.bind(this, 'charisme')}/>
						</label>
						<label>
							<span>Astuce:</span>
							<input type="text" value={this.state.profil.astuce} onClick={this._onDeposit.bind(this, 'astuce')}/>
						</label>
						<label>
							<span>Ame:</span>
							<input type="text" value={this.state.profil.ame} onClick={this._onDeposit.bind(this, 'ame')}/>
						</label>
					</fieldset>
					<fieldset>
						<legend>Traits physiques</legend>
						<label>
							<span>Dexterite:</span>
							<input type="text" value={this.state.profil.dexterite} onClick={this._onDeposit.bind(this, 'dexterite')}/>
						</label>

						<label>
							<span>Agilite:</span>
							<input type="text" value={this.state.profil.agilite} onClick={this._onDeposit.bind(this, 'agilite')}/>
						</label>

						<label>
							<span>Force:</span>
							<input type="text" value={this.state.profil.force} onClick={this._onDeposit.bind(this, 'force')}/>
						</label>

						<label>
							<span>Rapidite:</span>
							<input type="text" value={this.state.profil.rapidite} onClick={this._onDeposit.bind(this, 'rapidite')}/>
						</label>
						<label>
							<span>Vigueur:</span>
							<input type="text" value={this.state.profil.vigueur} onClick={this._onDeposit.bind(this, 'vigueur')}/>
						</label>
					</fieldset>
				</form>
				<link href="/static/css/caracteristics.css" rel="stylesheet" type="text/css" />
				<div id="mouse_plop">
					{this.state.dice_value}
				</div>
			</div>
		)
	}

	_onChange() {
		var profil = getProfilState()
		var cards = getCardsState()
		var state = {
			value: this.state.value,
			color: this.state.color,
			dice_value: this.state.dice_value,
			profil: profil,
			cards: cards.cards
		}
		this.setState(state)
	}

	_onSelect(payload) {
		var profil = getProfilState()
		var cards = getCardsState()
		var state = {
			dice_value: payload.dice_value,
			color: payload.color,
			value: payload.value,
			profil: profil,
			cards: cards.cards
		}
		this.setState(state)
	}

	_onDeposit(field) {
		console.log(field)
		var state = this.state
		var dice_value = state.dice_value
		state.dice_value = ''
		this.setState(state)
		Actions.setCaracteristic(field,
			dice_value,
			this.state.color,
			this.state.value)
	}

	handlerMM(e) {
		var x = (navigator.appName.substring(0,3) == "Net") ? e.pageX : event.x+document.body.scrollLeft;
		var y = (navigator.appName.substring(0,3) == "Net") ? e.pageY : event.y+document.body.scrollTop;
		document.getElementById('mouse_plop').style.left = (x+10)+'px';
		document.getElementById('mouse_plop').style.top = y+'px';
	}

}

export default Caracteristics
