import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/action'
import Immutable, { Map } from 'immutable'

class Assets extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selected_option: Map(),
			selected_tab: 'handi_tab'
		}
		this.createOption = this.createOption.bind(this)
		this._onSelectOption = this._onSelectOption.bind(this)
		this._onSelectTab = this._onSelectTab.bind(this)
	}

	createOption(item) {
		return(
			<option key={item.get('name')} value={item.get('name')} selected={item == this.state.selected_option}>{item.get('name')}</option>
		)
	}

	createPoints() {
		if (this.state.selected_option.get('value')) {
			return (
				this.state.selected_option.get('value').map(item => {
					console.log(item)
					return(
						<div key={'choice_' + item} className='choice'>
							<input id={item} type='radio' name='points' value={item}/>
							<label htmlFor={item}>{item}</label>
						</div>
					)

				})
			)
		}
	}

	render() {
		return(
			<div className='container'>
				<div className='panel'>
					<div className='menu'>
						<input id='handi_tab' type='radio' name='tabs' checked={this.state.selected_tab === 'handi_tab'} onChange={this._onSelectTab}/>
						<label htmlFor='handi_tab'>Handicaps</label>

						<input id='asset_tab' type='radio' name='tabs' checked={this.state.selected_tab === 'asset_tab'} onChange={this._onSelectTab}/>
						<label htmlFor='asset_tab'>Atouts</label>
						<section id='handicaps'>
							<select size='20' onChange={this._onSelectOption}>
								{this.props.handicaps.map(this.createOption)}
							</select>
						</section>
						<section id='assets'>
							<select size='20' onChange={this._onSelectOption}>
								{this.props.assets.map(this.createOption)}
							</select>
						</section>
					</div>

					<div className='content'>
						<div id='definition'>
							{this.state.selected_option.get('definition')}
						</div>
						<div>
							valeur disponible:
							<div className='choices'>
								{this.createPoints()}
							</div>
						</div>
					</div>
				</div>
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
		this.props.handicaps.map(item => {
			if (item.get('name') == evt.target.value) {
				var state = {
					selected_option: item,
					selected_tab: this.state.selected_tab
				}
				this.setState(state)
			}
		})
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
		return state
	},
	function mapDispatchToProps(dispatch) {
		return {
		}
	}
)(Assets)
