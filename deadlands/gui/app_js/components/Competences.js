import React from 'react'
import { connect } from 'react-redux'
import { competences } from '../redux/fixtures'
import * as actions from '../redux/action'

class Competence extends React.Component {
	constructor(props) {
		super(props)
		function findCompetence(item) {
			return item.get('name') == props.name
		}
		let competence = competences.find(item => findCompetence(item))
		let profil_competence = this.props.profil.get('competences').find(item => findCompetence(item))
		this.state = {
			competence: competence,
			profil_competence: profil_competence
		}
	}

	componentWillReceiveProps(nextProps) {
		function findCompetence(item) {
			return item.get('name') == nextProps.name
		}
		let profil_competence = nextProps.profil.get('competences').find(item => findCompetence(item))
		this.setState({
			competence: this.state.competence,
			profil_competence: profil_competence
		})
	}

	render() {
		let value = 0;
		if (this.state.profil_competence) {
			value = this.state.profil_competence.get('value')
		}
		return(
			<div>
				<label htmlFor={this.props.name}>{this.state.competence.get('text')}</label>
				<input type='text' id={this.props.name} value={value} readOnly/>
				<button onClick={() => this._onAdd()}>+</button>
				<button onClick={() => this._onSub()}>-</button>
			</div>
		)
	}

	_onAdd() {
		if (!this.state.profil_competence) {
			this.props.setCompetence(this.props.name, 1)
		}else if (this.state.profil_competence.get('value') < 5) {
			this.props.setCompetence(this.props.name, this.state.profil_competence.get('value') + 1)
		}
	}

	_onSub() {
		if (this.state.profil_competence && this.state.profil_competence.get('value') > this.state.competence.get('min')) {
			this.props.setCompetence(this.props.name, this.state.profil_competence.get('value') - 1)
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
			setCompetence: (name, value) => {
				dispatch(actions.setCompetence(name, value))
			}
		}
	}
)(Competence)

class Competences extends React.Component {
	render() {
		return(
			<div className="container">
				<div className='competences'>
					<div className='competence'>
						<h1>Perception</h1>
						<CompetenceContainer name='artillerie'/>
						<CompetenceContainer name='arts'/>
						<CompetenceContainer name='detecter'/>
						<CompetenceContainer name='pister'/>
						<CompetenceContainer name='scruter'/>
						<CompetenceContainer name='autre_per'/>
					</div>
					<div className='competence'>
						<h1>Connaissance</h1>
						<CompetenceContainer name='carriere'/>
						<CompetenceContainer name='territoires'/>
						<CompetenceContainer name='region' text="region d'origine"/>
						<CompetenceContainer name='deguisement'/>
						<CompetenceContainer name='explosif'/>
						<CompetenceContainer name='langues'/>
						<CompetenceContainer name='natale'/>
						<CompetenceContainer name='medecine'/>
						<CompetenceContainer name='metier'/>
						<CompetenceContainer name='science'/>
						<CompetenceContainer name='universalis'/>
						<CompetenceContainer name='autre_con'/>
					</div>
					<div className='competence'>
						<h1>Charisme</h1>
						<CompetenceContainer name='autorite'/>
						<CompetenceContainer name='dressage'/>
						<CompetenceContainer name='eloquence'/>
						<CompetenceContainer name='intimider'/>
						<CompetenceContainer name='persuasion'/>
						<CompetenceContainer name='spectacle'/>
						<CompetenceContainer name='autre_cha'/>
					</div>
					<div className='competence'>
						<h1>Astuce</h1>
						<CompetenceContainer name='bidouiller'/>
						<CompetenceContainer name='bluff'/>
						<CompetenceContainer name='rue'/>
						<CompetenceContainer name='denicher'/>
						<CompetenceContainer name='jeux'/>
						<CompetenceContainer name='ridiculiser'/>
						<CompetenceContainer name='survie'/>
						<CompetenceContainer name='autre_ast'/>
					</div>
					<div className='competence'>
						<h1>Ame</h1>
						<CompetenceContainer name='foi'/>
						<CompetenceContainer name='tripes'/>
						<CompetenceContainer name='autre_ame'/>
					</div>
					<div className='competence'>
						<h1>Dexterite</h1>
						<CompetenceContainer name='arc'/>
						<CompetenceContainer name='crocheter'/>
						<CompetenceContainer name='derober'/>
						<CompetenceContainer name='lancer'/>
						<CompetenceContainer name='passe'/>
						<CompetenceContainer name='recharger'/>
						<CompetenceContainer name='tirer1'/>
						<CompetenceContainer name='tirer2'/>
						<CompetenceContainer name='ventiler'/>
						<CompetenceContainer name='autre_dex'/>
					</div>
					<div className='competence'>
						<h1>Agilite</h1>
						<CompetenceContainer name='attelage'/>
						<CompetenceContainer name='combat'/>
						<CompetenceContainer name='conduire'/>
						<CompetenceContainer name='equitation'/>
						<CompetenceContainer name='esquiver'/>
						<CompetenceContainer name='furtivite'/>
						<CompetenceContainer name='grimper'/>
						<CompetenceContainer name='nager'/>
						<CompetenceContainer name='autre_agi'/>
					</div>
					<div className='competence'>
						<h1>Force</h1>
						<CompetenceContainer name='autre_for'/>
					</div>
					<div className='competence'>
						<h1>Rapidite</h1>
						<CompetenceContainer name='degainer'/>
						<CompetenceContainer name='autre_rap'/>
					</div>
					<div className='competence'>
						<h1>Vigueur</h1>
						<CompetenceContainer name='autre_vig'/>
					</div>
				</div>
				<link href="/static/css/competences.css" rel="stylesheet" type="text/css" />
			</div>
		)
	}
}

export default connect(
	function mapStateToProps(state) {
		return {
			profil: state.profil
		}
	}
)(Competences)
