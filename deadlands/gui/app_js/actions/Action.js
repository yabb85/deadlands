import Dispatcher from '../dispatchers/Dispatcher';
import Constants from '../constants/Constants';

var Actions = {
    distributeCards() {
        Dispatcher.handleGraphAction({
            actionType: Constants.DISTRIBUTE_CARDS
        });
    },
	resetDistribution() {
		Dispatcher.handleGraphAction({
			actionType: Constants.RESET_DISTRIBUTION
		});
	},
	validateDistribution() {
		Dispatcher.handleGraphAction({
			actionType: Constants.VALIDATE_DISTRIBUTION
		});
	},
	flipCard(color, value) {
		Dispatcher.handleGraphAction({
			actionType: Constants.FLIP_CARD,
			color: color,
			value: value
		});
	},
	setName(name) {
		Dispatcher.handleGraphAction({
			actionType: Constants.SET_NAME,
			name: name
		});
	},
	setCaracteristic(name, dice_value, color, card_value) {
		Dispatcher.handleGraphAction({
			actionType: Constants.SET_CARACTERISTIC,
			name: name,
			dice_value: dice_value,
			color: color,
			card_value: card_value
		});
	}
};

module.exports = Actions;
