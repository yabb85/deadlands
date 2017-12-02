import Dispatcher from '../dispatchers/Dispatcher';
import EventEmitter from 'events';
import Constants from '../constants/Constants';

var CHANGE_EVENT = 'change';

var _profil = {
	name: "test"
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
				flipped: -1
			},
			{
				color: "card",
				value: 1,
				dice: "",
				flipped: -1
			},
			{
				color: "card",
				value: 2,
				dice: "",
				flipped: -1
			},
			{
				color: "card",
				value: 3,
				dice: "",
				flipped: -1
			},
			{
				color: "card",
				value: 4,
				dice: "",
				flipped: -1
			},
			{
				color: "card",
				value: 5,
				dice: "",
				flipped: -1
			},
			{
				color: "card",
				value: 6,
				dice: "",
				flipped: -1
			},
			{
				color: "card",
				value: 7,
				dice: "",
				flipped: -1
			},
			{
				color: "card",
				value: 8,
				dice: "",
				flipped: -1
			},
			{
				color: "card",
				value: 9,
				dice: "",
				flipped: -1
			},
			{
				color: "card",
				value: 10,
				dice: "",
				flipped: -1
			},
			{
				color: "card",
				value: 11,
				dice: "",
				flipped: -1
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
				card['flipped'] = i * 0.5;
				hand.push(card)
			}
			_cards = {cards: hand}
			Store.emitChange()
		});
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
            distributeCards();
            break;

		case Constants.RESET_DISTRIBUTION:
			reset()
			break;

        default:
            return true;
    }

    Store.emitChange();

    return true;
});

module.exports = Store;
