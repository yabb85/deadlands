import { cards } from './fixtures'

export function distributeCards(data) {
	return {
		type: 'DISTRIBUTE_CARD',
		data: data
	}
}

export function resetDistribution() {
	return {
		type: 'RESET_DISTRIBUTION'
	}
}

export function flip(item) {
	return {
		type: 'FLIP_CARD',
		item: item
	}

}

export function discardCard(item) {
	return {
		type: 'DISCARD_CARD',
		item: item
	}
}

export function activateCard(item) {
	return {
		type: 'ACTIVATE_CARD',
		item: item
	}
}

export function setName(name) {
	return {
		type: 'SET_NAME',
		name: name
	}
}

export function setCaracteristic(carac_name, card) {
	return {
		type: 'SET_CARACTERISTIC',
		carac_name: carac_name,
		card: card
	}
}

export function setAsset(name, value, type) {
	return {
		type: 'SET_ASSET',
		name: name,
		value: value,
		asset_type: type
	}
}

export function setCompetence(name, value) {
	return {
		type: 'SET_COMPETENCE',
		name: name,
		value: value
	}
}
