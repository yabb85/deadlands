import React from 'react'
import { Link } from 'react-router-dom'
import Tapis from './Tapis'
import Actions from '../actions/Action'
import Store from '../stores/Store'

function getProfilState() {
	return Store.getProfil()
}

class Tirage extends React.Component {
	constructor(props) {
		super(props)
		this._onChange = this._onChange.bind(this)
		this.state = getProfilState()
	}

	componentWillMount() {
		Store.removeChangeListener(this._onChange)
	}

	componentDidMount() {
		Store.addChangeListener(this._onChange)
	}

	componentWillUnmount() {
		Store.removeChangeListener(this._onChange)
	}

	render() {
		return(
			<div className="container">
				<div>
					<span>Bienvenue dans le generateur de personnage pour le jeu Deadlands. Ils vous suffiras de suivre les indications des divers etapes afin de creer une fiche de personnage.
					</span>
				</div>
				<div>
					<span>ici vous allez entrer le nom de votre personnage.</span>
					<label>nom :</label>
					<input type="text" value={this.state.name} onChange={this._onEditName}/>
				</div>
				<Tapis />
				<div>
					<Link to="/caracteristics">Valider</Link>
				</div>
				<link href="/static/css/tirage.css" rel="stylesheet" type="text/css" />
			</div>
		)
	}

	_onChange() {
		this.setState(getProfilState())
	}

	_onValidate() {
		Actions.validateDistribution()
	}

	_onEditName(event) {
		Actions.setName(event.target.value)
	}
}

export default Tirage
