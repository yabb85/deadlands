import Dispatcher from '../dispatchers/Dispatcher';
import EventEmitter from 'events';
import Constants from '../constants/Constants';

var CHANGE_EVENT = 'change_card';

var _profil = {
	name: ""
}

var _cards = {
	cards: []
}

function reset() {
	_cards = {
		cards: [
			{
				color: "card",
				value: 0,
				dice: "",
				flipped: -1,
				selected: true
			},
			{
				color: "card",
				value: 1,
				dice: "",
				flipped: -1,
				selected: true
			},
			{
				color: "card",
				value: 2,
				dice: "",
				flipped: -1,
				selected: true
			},
			{
				color: "card",
				value: 3,
				dice: "",
				flipped: -1,
				selected: true
			},
			{
				color: "card",
				value: 4,
				dice: "",
				flipped: -1,
				selected: true
			},
			{
				color: "card",
				value: 5,
				dice: "",
				flipped: -1,
				selected: true
			},
			{
				color: "card",
				value: 6,
				dice: "",
				flipped: -1,
				selected: true
			},
			{
				color: "card",
				value: 7,
				dice: "",
				flipped: -1,
				selected: true
			},
			{
				color: "card",
				value: 8,
				dice: "",
				flipped: -1,
				selected: true
			},
			{
				color: "card",
				value: 9,
				dice: "",
				flipped: -1,
				selected: true
			},
			{
				color: "card",
				value: 10,
				dice: "",
				flipped: -1,
				selected: true
			},
			{
				color: "card",
				value: 11,
				dice: "",
				flipped: -1,
				selected: true
			}
		]
	}
	Store.emitChange()
}

function distributeCards() {
	reset()
	fetch("/distribute")
		.then(function(response) {
			return response.json()
		})
		.then(async function(data) {
			let hand = []
			for (var i=0; i<data.length; i++) {
				let card = data[i]
				card['flipped'] = i * 0.5
				card['selected'] = true
				hand.push(card)
			}
			_cards = {cards: hand}
			Store.emitChange()
		});
}

function setName(name) {
	_profil.name = name
	Store.emitChange()
}

function validateDistribution() {
	if (_profil.name == "") {
		return
	}
	let counter = 0
	_cards.cards.forEach((element) => {
		if (element.selected) {
			counter += 1
		}
	})
	if (counter != 10) {
		return
	}
}

function findCard(element){
	if (element.color == this.color && element.value == this.value) {
		return true
	}
	return false
}

function flipCard(color, value) {
	var val = _cards.cards.find(findCard, {color, value})
	val.selected = !val.selected
	Store.emitChange()
}

function setCaracteristic(name, dice_value, color, card_value) {
	var card = _cards.cards.find(findCard, {color: color, value: card_value})
	card.selected = false
	_profil[name] = dice_value
	Store.emitChange()
}

var Store = Object.assign({}, EventEmitter.prototype, {

	getProfil: function () {
		return _profil;
	},

    getCards: function() {
        return _cards;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

Dispatcher.register(function(payload) {

    switch(payload.action.actionType) {
        case Constants.DISTRIBUTE_CARDS:
            distributeCards()
            break

		case Constants.RESET_DISTRIBUTION:
			reset()
			break

		case Constants.VALIDATE_DISTRIBUTION:
			validateDistribution(payload.action.color, payload.action.value)
			break

		case Constants.FLIP_CARD:
			flipCard(payload.action.color, payload.action.value)
			break

		case Constants.SET_NAME:
			setName(payload.action.name)
			break

		case Constants.SET_CARACTERISTIC:
			setCaracteristic(payload.action.name, payload.action.dice_value,
				payload.action.color, payload.action.card_value)
			break

        default:
            return true;
    }

    Store.emitChange()

    return true;
});

module.exports = Store;
