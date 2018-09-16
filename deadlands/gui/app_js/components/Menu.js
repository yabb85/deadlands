import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/action'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.resetDistribution()
		this.props.cleanCaracteristics()
	}

	render() {
		return(
			<div className="content">
				generateur de personnage pour dealands
				<ul>
					<li><a href="/tirage">Creation</a></li>
					<li><a href="/test">Test</a></li>
					<li><a href="/quit">Quitter</a></li>
				</ul>
				<link href="/static/css/index.css" rel="stylesheet" type="text/css" />
			</div>
		)
	}
}

export default connect(
	function mapStateToProps(state) {
		return {}
	},
	function mapDispatchToProps(dispatch) {
		return {
			resetDistribution: () => {
				dispatch(actions.resetDistribution())
			},
			cleanCaracteristics: () => {
				dispatch(actions.cleanCaracteristics())
			}
		}
	}
)(Menu)

