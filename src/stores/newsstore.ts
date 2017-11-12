const actionType =  require('../actions/typings/actiontypes');
import Dispatcher = require('../actioncreators/dispatcher');
import { EventEmitter } from 'events';
import changeNewsAction =  require('../actions/changenewsaction');
import enums = require('../utilities/enums');

// The news store
class NewsStore extends EventEmitter {

	// data variables
	private _currentlyActiveIndex:number = 0;
	private _indexToBeActivated:number = 0;
	private _changeNewsTo:enums.News;

	// Events
	public static NEWS_CHANGED:string = 'NewsChanged';
	

	// The store constructor
	constructor() {
		super();
		// Registering the call back
		Dispatcher.register(this.dispatcherCallback.bind(this));
	}

	// Whenever the action is dipatched from an action creator
	private dispatcherCallback(action: any) {
		switch(action.actionType){
			case actionType.CHANGE_NEWS:
				let changeAction = action as changeNewsAction;
				this._currentlyActiveIndex = changeAction.currentIndex;
				this._indexToBeActivated = changeAction.newIndex;
				this._changeNewsTo = changeAction.changeTo;
				this.emit(NewsStore.NEWS_CHANGED);
				break;
		}
	}

	// Gets the current active index.
	public get currentlyActiveNewsIndex(): number{
		return this._currentlyActiveIndex;
	}

	// Gets the index to be activated.
	public get indexToBeActivated(): number{
		return this._indexToBeActivated;
	}

	// Gets the direction to which news has to be changed.
	public get changeNewsTo(): enums.News{
		return this._changeNewsTo;
	}
}

let instance = new NewsStore();
export = {NewsStore, instance};