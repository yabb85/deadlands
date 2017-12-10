import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/action'
import Immutable, { Map } from 'immutable'
import { Link } from 'react-router-dom'

class InputChoice extends React.Component {
	constructor(props) {
		super(props)
		let selected = props.item.get('name') + '0'
		let element = props.profil.get('assets').find(item => this.findAsset(item))
		if (element) {
			selected = element.get('name') + element.get('value')
		}
		this.state = {
			selected: selected
		}
	}

	componentWillReceiveProps(nextProps) {
		let selected = nextProps.item.get('name') + '0'
		let element = nextProps.profil.get('assets').find(item => this.findAsset(item, nextProps))
		if (element) {
			selected = element.get('name') + element.get('value')
		}
		this.setState({
			selected: selected
		})
	}

	createPoints(valuePoint) {
		return(
			<div key={'choice_' + valuePoint} className='choice'>
				<input id={this.props.item.get('name') + valuePoint} type='radio' name={this.props.item.get('name') + 'points'} value={valuePoint} checked={this.state.selected == this.props.item.get('name') + valuePoint} onChange={evt => this._onSetAsset(evt)}/>
				<label htmlFor={this.props.item.get('name') + valuePoint}>{valuePoint}</label>
			</div>
		)
	}

	findAsset(item, nextProps) {
		if (item) {
			return item.get('name') === nextProps.item.get('name')
		}
	}

	render() {
		let points = [0]
		if (this.props.item.get('value')) {
			points = points.concat(this.props.item.get('value'))
		}

		return(
			<div className='choices'>
				{points.map(item => this.createPoints(item))}
			</div>
		)
	}

	_onSetAsset(evt) {
		this.props.setAsset(this.props.item.get('name'), evt.target.value, this.props.item.get('type'))
	}
}
var InputChoiceContainer = connect(
	function mapStateToProps(state) {
		return {
			profil: state.profil
		}
	},
	function mapDispatchToProps(dispatch) {
		return {
			setAsset: (name, value, type) => {
				dispatch(actions.setAsset(name, value, type))
			}
		}
	}
)(InputChoice)

class ProfilAssets extends React.Component {
	createAsset(item) {
		if (this.props.filter == item.get('type')) {
			return(<li key={item.get('name')}>{item.get('name') + ' : ' + item.get('value')}</li>)
		}
	}

	render() {
		return(
			<ul>
				{this.props.profil.get('assets').map(item => this.createAsset(item))}
			</ul>
		)
	}
}

var ProfilAssetsContainer = connect(
	function mapStateToProps(state) {
		return {
			profil: state.profil
		}
	},
	function mapDispatchToProps(dispatch) {
		return {}
	}
)(ProfilAssets)

class Assets extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selected_option: Map(),
			selected_tab: 'handi_tab',
			counter: 0,
			counter_assets: 0,
			counter_handicaps: 0,
			error: ''
		}
		this._onSelectOption = this._onSelectOption.bind(this)
		this._onSelectTab = this._onSelectTab.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		let state = this.state
		state.counter_assets = 0
		state.counter_handicaps = 0
		nextProps.profil.get('assets').map(item => {
			if (item.get('type') == 'handicap') {
				state.counter_handicaps += parseInt(item.get('value'))
			} else {
				state.counter_assets += parseInt(item.get('value'))
			}
		})
		state.error = ''
		if (state.counter_assets > 10) {
			state.error = "Trop d'atouts choisi!"
		}
		if (state.counter_handicaps > 10) {
			state.error = "Trop d'handicaps choisi!"
		}
		state.counter = state.counter_handicaps - state.counter_assets
		this.setState(state)
	}

	createOption(item, filter) {
		if (item.get('type') == filter) {
			return(
				<option key={item.get('name')} value={item.get('name')} selected={item == this.state.selected_option}>{item.get('name')}</option>
			)
		}
	}


	render() {
		return(
			<div className='container'>
				<div className="error">
					{this.state.error}
				</div>
				<div className='panel'>
					<div className='menu'>
						<input id='handi_tab' type='radio' name='tabs' checked={this.state.selected_tab === 'handi_tab'} onChange={this._onSelectTab}/>
						<label htmlFor='handi_tab'>Handicaps</label>

						<input id='asset_tab' type='radio' name='tabs' checked={this.state.selected_tab === 'asset_tab'} onChange={this._onSelectTab}/>
						<label htmlFor='asset_tab'>Atouts</label>
						<section id='handicaps'>
							<select size='20' onChange={this._onSelectOption}>
								{this.props.assets.map(item => this.createOption(item, 'handicap'))}
							</select>
						</section>
						<section id='assets'>
							<select size='20' onChange={this._onSelectOption}>
								{this.props.assets.map(item => this.createOption(item, 'asset'))}
							</select>
						</section>
					</div>

					<div className='content'>
						<div id='definition'>
							{this.state.selected_option.get('definition')}
						</div>
						<div>
							valeur disponible:
							<InputChoiceContainer item={this.state.selected_option}/>
						</div>
					</div>
					<div className='profil'>
						<div id='name'>
							{this.props.profil.get('name')}
						</div>
						<div>
							<div className='title'>
								<div>Atouts:</div>
								<hr />
								<div>{this.state.counter_assets}</div>
							</div>
							<ProfilAssetsContainer filter='asset'/>
						</div>
						<div>
							<div className='title'>
								<div>Handicaps:</div>
								<hr />
								<div>{this.state.counter_handicaps}</div>
							</div>
							<ProfilAssetsContainer filter='handicap'/>
						</div>
						<div className="title">
							<div>Total:</div>
							<hr />
							<div>{this.state.counter}</div>
						</div>
					</div>
				</div>
			<Link to="/competences">Valider</Link>
				<link href="/static/css/assets.css" rel="stylesheet" type="text/css" />
			</div>
		)
	}

	_onSelectTab(evt) {
		var state = {
			selected_option: this.state.selected_option,
			selected_tab: evt.target.id
		}
		this.setState(state)
	}

	_onSelectOption(evt) {
		this.props.assets.map(item => {
			if (item.get('name') == evt.target.value) {
				var state = {
					selected_option: item,
					selected_tab: this.state.selected_tab
				}
				this.setState(state)
			}
		})
	}
}

export default connect(
	function mapStateToProps(state) {
		return {
			profil: state.profil,
			assets: state.assets
		}
	},
	function mapDispatchToProps(dispatch) {
		return {}
	}
)(Assets)
