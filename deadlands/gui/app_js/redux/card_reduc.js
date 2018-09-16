import { cards } from './fixtures'
import Immutable, { List, Map } from 'immutable'

export default function card_reduc(state = cards, action) {
	switch (action.type) {
		case 'DISTRIBUTE_CARD':
			var newState = List()
			for (let i=0; i<action.data.length; ++i) {
				var temp = Map(action.data[i])
				temp = temp.set('flip', i*0.5).set('selected', true)
				newState = newState.push(temp)
			}
			return newState
		case 'RESET_DISTRIBUTION':
			return cards
		case 'FLIP_CARD':
			return state.map(item => {
				if (item.get('color') == action.item.get('color') &&
					item.get('figure') == action.item.get('figure')) {
					let value = !item.get('removed')
					return item.set('removed', value)
				} else {
					return item
				}
			})
		case 'DISCARD_CARD':
			return state.map(item => {
				if (item.get('color') == action.item.get('color') &&
					item.get('figure') == action.item.get('figure')) {
					return item.set('selected', false)
				} else {
					return item
				}
			})
		case 'ACTIVATE_CARD':
			return state.map(item => {
				if (item.get('color') == action.item.get('color') &&
					item.get('figure') == action.item.get('figure')) {
					return item.set('selected', true)
				} else {
					return item
				}
			})
		case 'ACTIVATE_ALL_CARDS':
			return state.map(item => {
				return item.set('selected', true)
			})
		default:
			return state
	}
}
