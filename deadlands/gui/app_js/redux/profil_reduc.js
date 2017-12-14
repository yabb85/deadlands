import { profil } from './fixtures.js'
import Immutable, { Map } from 'immutable'

export default function profil_reduc(state = profil, action) {
	switch (action.type) {
		case 'SET_NAME':
			return state.set('name', action.name)
		case 'SET_CARACTERISTIC':
			return state.set(action.carac_name, action.card)
		case 'SET_ASSET':
			var newAssets = state.get('assets').map(item => {
				if (item.get('name') == action.name){
					return item.set('value', action.value)
				} else {
					return item
				}
			})
			if (newAssets.equals(state.get('assets')) && action.value != 0) {
				newAssets = state.get('assets').push(Map({
					name: action.name,
					value: action.value,
					type: action.asset_type
				}))
			} else if (action.value == 0) {
				newAssets = newAssets.filter(item => {
					return item.get('name') != action.name
				})
			}
			return state.set('assets', newAssets)
		case 'VALID_ASSET':
			return state.set('points', action.points)
		case 'SET_COMPETENCE':
			var newCompetences = state.get('competences').map(item => {
				if (item.get('name') == action.name) {
					return item.set('value', action.value)
				} else {
					return item
				}
			})
			if(newCompetences.equals(state.get('competences'))) {
				newCompetences = newCompetences.push(Map({name: action.name, value: action.value}))
			}
			var newPoints = state.set('points', state.get('points') + action.modif)
			return newPoints.set('competences', newCompetences)
		default:
			return state
	}
}
