import Dispatcher from '../dispatchers/Dispatcher';
import Constants from '../constants/Constants';

var Actions = {
    distributeCards: function() {
        Dispatcher.handleGraphAction({
            actionType: Constants.DISTRIBUTE_CARDS
        });
    },
	resetDistribution: function() {
		Dispatcher.handleGraphAction({
			actionType: Constants.RESET_DISTRIBUTION
		});
	}
};

module.exports = Actions;
