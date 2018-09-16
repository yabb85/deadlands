import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/action'
import Immutable, { Map } from 'immutable'
import { Redirect } from 'react-router-dom'

class InputChoice extends React.Component {
	// display the definition and value of selected asset or handicap
	constructor(props) {
		super(props)
		let selected = props.item.get('name') + '0'
		let element = props.profil.get('assets').find(item => this.findAsset(item, props.item))
		if (element) {
			selected = element.get('name') + element.get('value')
		}
		this.state = {
			selected: selected
		}
	}

	componentWillReceiveProps(nextProps) {
		let selected = nextProps.item.get('name') + '0'
		let element = nextProps.profil.get('assets').find(item => this.findAsset(item, nextProps.item))
		if (element) {
			selected = element.get('name') + element.get('value')
		}
		this.setState({
			selected: selected
		})
	}

	createPoints(valuePoint) {
		// set value selected for current asset or handicap
		return(
			<div key={'choice_' + valuePoint} className='choice'>
				<input id={this.props.item.get('name') + valuePoint} type='radio' name={this.props.item.get('name') + 'points'} value={valuePoint} checked={this.state.selected == this.props.item.get('name') + valuePoint} onChange={evt => this._onSetAsset(evt)}/>
				<label htmlFor={this.props.item.get('name') + valuePoint}>{valuePoint}</label>
			</div>
		)
	}

	findAsset(assetItem, selectedItem) {
		if (assetItem && selectedItem) {
			return assetItem.get('name') === selectedItem.get('name')
		}
		return false
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
	// display page with asset and handicaps
	constructor(props) {
		super(props)
		let counterHandicaps = 0
		let counterAssets = 0
		props.profil.get('assets').map(item => {
			if (item.get('type') == 'handicap') {
				counterHandicaps += parseInt(item.get('value'))
			} else {
				counterAssets += parseInt(item.get('value'))
			}
		})
		this.state = {
			selectedOption: Map(),
			selected_tab: 'handi_tab',
			counter: counterHandicaps - counterAssets,
			counterAssets: counterAssets,
			counterHandicaps: counterHandicaps,
			error: '',
			displayed: false
		}
		this._onSelectOption = this._onSelectOption.bind(this)
		this._onSelectTab = this._onSelectTab.bind(this)
		this._onValidate = this._onValidate.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		let state = this.state
		state.counterAssets = 0
		state.counterHandicaps = 0
		nextProps.profil.get('assets').map(item => {
			if (item.get('type') == 'handicap') {
				state.counterHandicaps += parseInt(item.get('value'))
			} else {
				state.counterAssets += parseInt(item.get('value'))
			}
		})
		state.error = ''
		if (state.counterAssets > 10) {
			state.error = "Trop d'atouts choisi!"
		}
		if (state.counterHandicaps > 10) {
			state.error = "Trop d'handicaps choisi!"
		}
		state.counter = state.counterHandicaps - state.counterAssets
		this.setState(state)
	}

	componentDidMount() {
		this.props.cleanCompetences();
	}

	createOption(item, filter) {
		if (item.get('type') == filter) {
			return(
				<option key={item.get('name')} value={item.get('name')} selected={item == this.state.selectedOption}>{item.get('name')}</option>
			)
		}
	}

	render() {
		if (this.state.displayed == true) {
			return(<Redirect push to="/competences"/>)
		}
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
							{this.state.selectedOption.get('definition')}
						</div>
						<div>
							valeur disponible:
							<InputChoiceContainer item={this.state.selectedOption}/>
						</div>
					</div>
					<div className='profil'>
						<div id='name'>
							{this.props.profil.get('name')}
						</div>
						<div>
							<div className='assets_result'>
								<div>Atouts:</div>
								<hr />
								<div>{this.state.counterAssets}</div>
							</div>
							<ProfilAssetsContainer filter='asset'/>
						</div>
						<div>
							<div className='assets_result'>
								<div>Handicaps:</div>
								<hr />
								<div>{this.state.counterHandicaps}</div>
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
				<button onClick={(evt) => this._onValidate(evt)}>Valider</button>
				<link href="/static/css/assets.css" rel="stylesheet" type="text/css" />
			</div>
		)
	}

	_onSelectTab(evt) {
		var state = {
			selectedOption: this.state.selectedOption,
			selected_tab: evt.target.id
		}
		this.setState(state)
	}

	_onSelectOption(evt) {
		this.props.assets.map(item => {
			if (item.get('name') == evt.target.value) {
				var state = {
					selectedOption: item,
					selected_tab: this.state.selected_tab
				}
				this.setState(state)
			}
		})
	}

	_onValidate(evt) {
		if (this.state.counterAssets < 11 && this.state.counterHandicaps < 11) {
			let astuce = parseInt(this.props.profil.get('astuce').get('dice').replace('d', ''))
			let perception = parseInt(this.props.profil.get('perception').get('dice').replace('d', ''))
			let connaissance = parseInt(this.props.profil.get('connaissance').get('dice').replace('d', ''))
			var competencePoints = astuce + perception + connaissance + this.state.counterHandicaps - this.state.counterAssets
			this.props.validate(competencePoints)
			this.setState({displayed: true})
		}
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
		return {
			validate: (competencePoints) => {
				dispatch(actions.validAsset(competencePoints))
			},
			cleanCompetences: () => {
				dispatch(actions.cleanCompetences())
			}
		}
	}
)(Assets)
