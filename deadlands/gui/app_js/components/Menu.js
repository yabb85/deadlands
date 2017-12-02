import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
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

export default Menu

