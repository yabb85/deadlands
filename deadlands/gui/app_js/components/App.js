import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu'
import Tirage from './Tirage'
import Caracteristics from './Carac'

class App extends React.Component {
	render() {
		return(
			<BrowserRouter>
				<div>
					<div className="logo">
						<img src="static/img/deadlands.png" alt="Deadlands" />
					</div>
					<Route exact path='/' component={Menu} />
					<Route path='/tirage' component={Tirage} />
					<Route path='/caracteristics' component={Caracteristics} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App
