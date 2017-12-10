import { handicaps } from './fixtures'
import Immutable, { List, Map } from 'immutable'

export default function handicaps_reduc(state = handicaps, action) {
	switch (action.type) {
		case 'SELECT_HANDICAP':
			return state
		default:
			return state
	}
}
