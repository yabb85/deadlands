import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import App from './components/App';

import card_reduc from './redux/card_reduc'
import profil_reduc from './redux/profil_reduc'
import assets_reduc from './redux/assets_reduc'
import handicaps_reduc from './redux/handicaps_reduc'

// declare liste des reducers
const reducers = {
	cards: card_reduc,
	profil: profil_reduc,
	assets: assets_reduc
}

// combine tous les reducers
const reduc = combineReducers(reducers)

// declare la sauvegarde du store
const persistConfig = {
	transforms: [immutableTransform()],
	key: 'root',
	storage: storage
}

const persistedReducer = persistReducer(persistConfig, reduc)

const store = createStore(
	persistedReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const persistor = persistStore(store)

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById("deadlands")
);
