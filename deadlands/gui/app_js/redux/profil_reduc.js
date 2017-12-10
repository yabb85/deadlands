import { profil } from './fixtures.js'
import Immutable, { Map } from 'immutable'

export default function profil_reduc(state = profil, action) {
	switch (action.type) {
		case 'SET_NAME':
			return state.set('name', action.name)
		case 'SET_CARACTERISTIC':
			return state.set(action.carac_name, action.card)
		case 'SET_ASSET':
			var newState = state.get('assets').map(item => {
				if (item.get('name') == action.name){
					return item.set('value', action.value)
				} else {
					return item
				}
			})
			if (newState.equals(state.get('assets')) && action.value != 0) {
				newState = state.get('assets').push(Map({
					name: action.name,
					value: action.value,
					type: action.asset_type
				}))
			} else if (action.value == 0) {
				newState = newState.filter(item => {
					return item.get('name') != action.name
				})
			}
			return state.set('assets', newState)
		default:
			return state
	}
}
