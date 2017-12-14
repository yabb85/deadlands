import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App';

import card_reduc from './redux/card_reduc'
import profil_reduc from './redux/profil_reduc'
import assets_reduc from './redux/assets_reduc'
import handicaps_reduc from './redux/handicaps_reduc'

const reducers = {
	cards: card_reduc,
	profil: profil_reduc,
	assets: assets_reduc
}

const reduc = combineReducers(reducers)
const store = createStore(
	reduc
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("deadlands")
);
