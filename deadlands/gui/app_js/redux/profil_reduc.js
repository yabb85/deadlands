import { profil, competences } from './fixtures.js'
import Immutable, { Map, List } from 'immutable'

export default function profil_reduc(state = profil, action) {
	switch (action.type) {
		case 'SET_NAME':
			return state.set('name', action.name)
		case 'SET_CARACTERISTIC':
			return state.set(action.carac_name, action.card)
		case 'CLEAN_CARACTERITICS':
			state = state.set('perception', null)
			state = state.set('connaissance', null)
			state = state.set('charisme', null)
			state = state.set('astuce', null)
			state = state.set('ame', null)
			state = state.set('dexterite', null)
			state = state.set('agilite', null)
			state = state.set('force', null)
			state = state.set('rapidite', null)
			state = state.set('vigueur', null)
			return state
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
		case 'CLEAN_ASSETS':
			return state.set('assets', List([]))
		case 'UP_COMPETENCE':
			if (state.get('points') <= 0) {
				return state
			}
			let up_found = false
			let up_updated = false
			var newCompetences = state.get('competences').map(item => {
				let value = item.get('value')
				if (item.get('name') == action.item.get('name')) {
					up_found = true
					if (action.speciality) {
						item = item.set('speciality', action.speciality)
					}
					if (value < 5) {
						up_updated = true
						return item.set('value', value + 1)
					} else {
						return item
					}
				} else {
					return item
				}
			})
			if(!up_found) {
				let newItem = Map({name: action.item.get('name'), value: 1})
				if (action.speciality) {
					newItem = newItem.set('speciality', action.speciality)
				}
				newCompetences = newCompetences.push(newItem)
				up_updated = true
			}
			var newPoints = state
			if (up_updated) {
				newPoints = state.set('points', state.get('points') - 1)
			}
			return newPoints.set('competences', newCompetences)
		case 'DOWN_COMPETENCE':
			let down_updated = false
			var newCompetences = state.get('competences').map(item => {
				let value = item.get('value')
				if (item.get('name') == action.item.get('name') && value > action.item.get('min')) {
					down_updated = true
					return item.set('value', value - 1)
				} else {
					return item
				}
			})
			var newPoints = state
			if (down_updated) {
				newPoints = state.set('points', state.get('points') + 1)
			}
			return newPoints.set('competences', newCompetences)
		case 'SPECIALITY_COMPETENCE':
			var newCompetences = state.get('competences').map(item => {
				if (item.get('name') == action.item.get('name')) {
					return item.set('speciality', action.speciality)
				} else {
					return item
				}
			})
			return state.set('competences', newCompetences)
		case 'CLEAN_COMPETENCES':
			return state.set('competences', competences)
		default:
			return state
	}
}
