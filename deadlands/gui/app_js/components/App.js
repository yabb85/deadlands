import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu'
import Tirage from './Tirage'
import Carac from './Carac'

class App extends React.Component {
	render() {
		return(
			<BrowserRouter>
				<div>
					<div className="logo">
						<img src="static/img/deadlands.png" alt="Deadlands" />
					</div>
					<Route exact path='/' component={Menu} />
					<Route path='/test' component={Tirage} />
					<Route path='/caracteristics' component={Carac} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App
