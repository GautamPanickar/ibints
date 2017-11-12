import ActionType = require('./typings/actiontypes');
import Dispatcher = require('../actioncreators/dispatcher');
import enums = require('../utilities/enums');

// Change news action
class ChnageNewsAction {
	private _currentIndex: number;
	private _newIndex: number;
	private _changeTo: enums.News;

	// The constructor
	constructor(currentIndex: number, newIndex: number, changeTo: enums.News) {		
		this._currentIndex = currentIndex;
		this._newIndex = newIndex;
		this._changeTo = changeTo;
		Dispatcher.dispatch({
			actionType: ActionType.CHANGE_NEWS, 
			currentIndex: this.currentIndex,
			newIndex: this.newIndex,
			changeTo: this.changeTo
		});
	}

	// Gets the currently active news item index.
	public get currentIndex (): number{
		return this._currentIndex;
	}

	// Gets the new index to be activated.
	public get newIndex (): number{
		return this._newIndex;
	}

	// Gets the directio to chnage to.
	public get changeTo(): enums.News{
		return this._changeTo;
	}
}

export = ChnageNewsAction;