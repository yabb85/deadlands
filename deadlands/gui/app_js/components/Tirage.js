import React from 'react'
import { Link } from 'react-router-dom'
import Tapis from './Tapis'

function getProfilState() {
	return Storage.getProfil()
}

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
					<input type="text"/>
				</div>
				<Tapis />
				<div>
					<Link to="/caracteristics">suite</Link>
				</div>
				<link href="/static/css/tirage.css" rel="stylesheet" type="text/css" />
			</div>
		)
	}
}

export default Tirage
