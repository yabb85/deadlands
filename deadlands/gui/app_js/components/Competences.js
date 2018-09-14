import React from 'react'
import { connect } from 'react-redux'
import { competencesDefinition } from '../redux/fixtures'
import * as actions from '../redux/action'
import { Redirect } from 'react-router-dom'

class Speciality extends React.Component {
	createSelect(item) {
		return(<option key={item}>{item}</option>)
	}

	render() {
		if (this.props.spe && this.props.spe.length > 0) {
			return(
				<select value={this.props.default} onChange={this.props.onChange}>
					<option value=''></option>
					{this.props.spe.map(this.createSelect)}
				</select>
			)
		} else if (this.props.spe && this.props.spe.length == 0) {
			return(
				<input type="text" value={this.props.default} onChange={this.props.onChange}/>
			)
		} else {
			return(null)
		}
	}
}

class Competence extends React.Component {
	constructor(props) {
		super(props)
		function findCompetence(item) {
			return item.get('name') == props.item.get('name')
		}
		let profil_competence = this.props.profil.get('competences').find(item => findCompetence(item))
		let speciality = ''
		if (profil_competence) {
			speciality = profil_competence.get('speciality')
		}
		this.state = {
			profil_competence: profil_competence,
			speciality: speciality
		}
	}

	componentWillReceiveProps(nextProps) {
		function findCompetence(item) {
			return item.get('name') == nextProps.item.get('name')
		}
		let profil_competence = nextProps.profil.get('competences').find(item => findCompetence(item))
		let speciality = ''
		if (profil_competence) {
			speciality = profil_competence.get('speciality')
		}
		this.setState({
			profil_competence: profil_competence,
			speciality: speciality
		})
	}

	render() {
		let value = 0;
		if (this.state.profil_competence) {
			value = this.state.profil_competence.get('value')
		}
		return(
			<div className='competence'>
				<label htmlFor={this.props.item.get('name')}>{this.props.item.get('text')}</label>
				<div className='speciality'>
					<Speciality spe={this.props.item.get('spe')} default={this.state.speciality} onChange={(evt) => this._onChange(evt)}/>
				</div>
				<input type='text' id={this.props.item.get('name')} className='dice' value={value} readOnly/>
				<button onClick={() => this._onAdd()}>+</button>
				<button onClick={() => this._onSub()}>-</button>
			</div>
		)
	}

	_onAdd() {
		this.props.upCompetence(this.props.item, this.state.speciality)
	}

	_onSub() {
		this.props.downCompetence(this.props.item, this.state.speciality)
	}

	_onChange(evt) {
		if (this.state.profil_competence && this.state.profil_competence.get('value') > 0) {
			this.props.updateSpeciality(this.props.item, evt.target.value)
		} else {
			this.props.upCompetence(this.props.item, evt.target.value)
		}
	}
}

var CompetenceContainer = connect(
	function mapStateToProps(state) {
		return {
			profil: state.profil
		}
	},
	function mapDispatchToProps(dispatch) {
		return {
			upCompetence: (item, speciality) => {
				dispatch(actions.upCompetence(item, speciality))
			},
			downCompetence: (item, speciality) => {
				dispatch(actions.downCompetence(item, speciality))
			},
			updateSpeciality: (item, speciality) => {
				dispatch(actions.updateCompetenceSpeciality(item, speciality))
			}
		}
	}
)(Competence)

class Trait extends React.Component {
	createCompetence(item) {
		return(
			<CompetenceContainer key={item.get('name')} item={item}/>
		)
	}

	render() {
		return(
			<div className="competences">
				<h1>{this.props.item.get('name')}</h1>
				{this.props.item.get('subsection').map(this.createCompetence)}
			</div>
		)
	}
}

class Competences extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			validate: false,
			error: ''
		}
	}

	createTrait(item) {
		return(
			<Trait key={item.get('name')} item={item}/>
		)
	}

	render() {
		if (this.state.validate) {
			return(<Redirect push to="/sheet"/>)
		}
		return(
			<div className="container">
				<div>
					{this.state.error}
				</div>
				<div>
					Points restants: {this.props.profil.get('points')}
				</div>
				<div className='traits'>
					{competencesDefinition.map(this.createTrait)}
				</div>
 				<button onClick={(evt) => this._onValidate(evt)}>Valider</button>
				<link href="/static/css/competences.css" rel="stylesheet" type="text/css" />
			</div>
		)
	}

	_onValidate(evt) {
		if (this.props.profil.get('points') == 0) {
			this.setState({validate: true, error: ''})
		} else {
			this.setState({validate: false, error: "Vous n'avez pas attribué tous vos points"})
		}
	}
}

export default connect(
	function mapStateToProps(state) {
		return {
			profil: state.profil
		}
	},
	function mapDispatchToProps(dispatch) {
		return {
		}
	}
)(Competences)
