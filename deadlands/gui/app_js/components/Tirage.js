import React from 'react'
import { Link } from 'react-router-dom'
import Tapis from './Tapis'
import { connect } from 'react-redux'
import * as actions from '../redux/action'

class Tirage extends React.Component {

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
					<input type="text" value={this.props.profil.get('name')} onChange={this.props.setName} />
				</div>
				<Tapis />
				<div>
					<Link to="/caracteristics">Valider</Link>
				</div>
				<link href="/static/css/tirage.css" rel="stylesheet" type="text/css" />
			</div>
		)
	}
}


export default connect(
	function mapStateToProps(state) {
		return {profil: state.profil}
	},
	function mapDispatchToProps(dispatch) {
		return {
			setName: (name) => {
				dispatch(actions.setName(name.target.value))
			}
		}
	}
)(Tirage)
