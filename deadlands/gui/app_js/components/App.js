import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu'
import Tirage from './Tirage'
import Caracteristics from './Caracteristics'
import Assets from './Assets'
import Competences from './Competences'
import createHistory from 'history/createBrowserHistory'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import card_reduc from '../redux/card_reduc'
import profil_reduc from '../redux/profil_reduc'
import assets_reduc from '../redux/assets_reduc'
import handicaps_reduc from '../redux/handicaps_reduc'

const history = createHistory()
const middleware = routerMiddleware(history)

const reducers = {
	cards: card_reduc,
	profil: profil_reduc,
	assets: assets_reduc,
	router: routerReducer
}

const reduc = combineReducers(reducers)
const store = createStore(
	reduc,
	applyMiddleware(middleware),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends React.Component {
	render() {
		return(
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<div>
						<div className="logo">
							<img src="static/img/deadlands.png" alt="Deadlands" />
						</div>
						<Route exact path='/' component={Menu} />
						<Route path='/tirage' component={Tirage} />
						<Route path='/caracteristics' component={Caracteristics} />
						<Route path='/assets' component={Assets} />
						<Route path='/competences' component={Competences} />
					</div>
				</ConnectedRouter>
			</Provider>
		);
	}
}

export default App
