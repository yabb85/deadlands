import React from 'react'
import { connect } from 'react-redux'

class Sheet extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log(this.props)
		console.log(this.props.profil)
		return(
			<div>
				<div className="sheet">
					<div id="name">{this.props.profil.name}</div>
					<div id="occupation">{this.props.profil.occupation}</div>
					<div id="perception">{this.props.profil.get('perception').get('dice')}</div>
					<div id="connaissance">{this.props.profil.get('connaissance').get('dice')}</div>
					<div id="charisme">{this.props.profil.get('charisme').get('dice')}</div>
					<div id="astuce">{this.props.profil.get('astuce').get('dice')}</div>
					<div id="ame">{this.props.profil.get('ame').get('dice')}</div>
					<div id="dexterite">{this.props.profil.get('dexterite').get('dice')}</div>
					<div id="agilite">{this.props.profil.get('agilite').get('dice')}</div>
					<div id="force">{this.props.profil.get('force').get('dice')}</div>
					<div id="rapidite">{this.props.profil.get('rapidite').get('dice')}</div>
					<div id="vigueur">{this.props.profil.get('vigueur').get('dice')}</div>
				</div>
				<link href="/static/css/sheet.css" rel="stylesheet" type="text/css"/>
			</div>
		)
	}
}

export default connect(
	function mapStateToProps(state){
		return {profil: state.profil}
	},
	function mapDispatchToProps(dispatch) {
		return {
		}
	}
)(Sheet);
