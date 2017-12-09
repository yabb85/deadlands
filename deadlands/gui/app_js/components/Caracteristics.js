import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/action'
import Immutable, { Map } from 'immutable'
import { Link } from 'react-router-dom'

class InputCaracteristic extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var value = ''
		if (this.props.profil.get(this.props.name)) {
			value = this.props.profil.get(this.props.name).get('coordination') + this.props.profil.get(this.props.name).get('dice')
		}
		return(
			<input type="text" name={this.props.name} value={value} onClick={evt => this._onClick(evt)} readOnly/>
		)
	}

	_onClick(evt) {
		evt.card = this.props.profil.get(this.props.name)
		this.props.onClick(evt)
	}
}


var InputCaracteristicContainer = connect(
	function mapStateToProps(state) {
		return {
			profil: state.profil
		}
	}
)(InputCaracteristic)

class Caracteristics extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			card: null
		}
		this.createCard = this.createCard.bind(this)
	}

	componentDidMount() {
		document.onmousemove = this.handlerMM;
	}

	componentWillUnmount() {
		document.onmousemove = null;
	}

	createCard(element) {
		if (element.get('selected')) {
			return(<div key={element.get('color') + element.get('figure')} className={"dice " + element.get('dice')} style={{ filter: element.get('selected') ? 'opacity(100%)' : 'opacity(50%)' }} onClick={this._onSelect.bind(this, element)}>{element.get('coordination')}</div>)
		}
	}

	render() {
		var mouse_text = null
		if (this.state.card)
			mouse_text = this.state.card.get('coordination') + this.state.card.get('dice')

		return(
			<div className="container">
				<div className="dices">
					{this.props.cards.map(this.createCard)}
				</div>
				<form className="profil">
					<fieldset>
						<legend>Traits mentaux </legend>
						<label>
							<span>Perception:</span>
							<InputCaracteristicContainer name='perception' onClick={evt => this._onDeposit(evt)}/>
						</label>
						<label>
							<span>Connaissance:</span>
							<InputCaracteristicContainer name='connaissance' onClick={evt => this._onDeposit(evt)}/>
						</label>
						<label>
							<span>Charisme:</span>
							<InputCaracteristicContainer name='charisme' onClick={evt => this._onDeposit(evt)}/>
						</label>
						<label>
							<span>Astuce:</span>
							<InputCaracteristicContainer name='astuce' onClick={evt => this._onDeposit(evt)}/>
						</label>
						<label>
							<span>Ame:</span>
							<InputCaracteristicContainer name='ame' onClick={evt => this._onDeposit(evt)}/>
						</label>
					</fieldset>
					<fieldset>
						<legend>Traits physiques</legend>
						<label>
							<span>Dexterite:</span>
							<InputCaracteristicContainer name='dexterite' onClick={evt => this._onDeposit(evt)}/>
						</label>

						<label>
							<span>Agilite:</span>
							<InputCaracteristicContainer name='agilite' onClick={evt => this._onDeposit(evt)}/>
						</label>

						<label>
							<span>Force:</span>
							<InputCaracteristicContainer name='force' onClick={evt => this._onDeposit(evt)}/>
						</label>

						<label>
							<span>Rapidite:</span>
							<InputCaracteristicContainer name='rapidite' onClick={evt => this._onDeposit(evt)}/>
						</label>
						<label>
							<span>Vigueur:</span>
							<InputCaracteristicContainer name='vigueur' onClick={evt => this._onDeposit(evt)}/>
						</label>
					</fieldset>
				</form>
				<link href="/static/css/caracteristics.css" rel="stylesheet" type="text/css" />
				<div>
					<Link to="/assets">Valider</Link>
				</div>
				<div id="mouse_plop">
					{mouse_text}
				</div>
			</div>
		)
	}

	_onSelect(payload) {
		if (this.state.card) {
			this.props.activateCard(this.state.card)
		}
		var state = {
			card: payload
		}
		this.setState(state)
	}

	_onDeposit(evt) {
		if (this.state.card && this.state.card.get('coordination')) {
			if (evt.card) {
				this.props.setCaracteristic(evt.target.name, this.state.card)
				var state = {
					card: evt.card
				}
				this.setState(state)
			} else {
				this.props.setCaracteristic(evt.target.name, this.state.card)
				var state = {
					card: null
				}
				this.setState(state)
			}
		} else {
			if (evt.card) {
				this.props.setCaracteristic(evt.target.name, null)
				var state = {
					card: evt.card
				}
				this.setState(state)
			}
		}
	}

	handlerMM(e) {
		var x = (navigator.appName.substring(0,3) == "Net") ? e.pageX : event.x+document.body.scrollLeft;
		var y = (navigator.appName.substring(0,3) == "Net") ? e.pageY : event.y+document.body.scrollTop;
		document.getElementById('mouse_plop').style.left = (x+10)+'px';
		document.getElementById('mouse_plop').style.top = y+'px';
	}

}

export default connect(
	function mapStateToProps(state) {
		return state
	},
	function mapDispatchToProps(dispatch) {
		return {
			setCaracteristic: (item, card) => {
				dispatch(actions.setCaracteristic(item, card))
				dispatch(actions.discardCard(card))
			},
			activateCard: (card) => {
				dispatch(actions.activateCard(card))
			}
		}
	}
)(Caracteristics)
