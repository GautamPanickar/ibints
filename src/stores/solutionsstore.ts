const actionType =  require('../actions/typings/actiontypes');
import Dispatcher = require('../actioncreators/dispatcher');
import { EventEmitter } from 'events';
import selectSolutionItemaction = require('../actions/selectsolutionitemaction');


// The solutions store
class SolutionsStore extends EventEmitter {

	// data variables
	private _selectedSolutionItemIndex:number = 0;
	private _selectedSolutionItemName:string = null;

	// Events
	public static SOLUTION_ITEM_SELECTED:string = 'SolutionItemSelected';
	

	// The store constructor
	constructor() {
		super();
		// Registering the call back
		Dispatcher.register(this.dispatcherCallback.bind(this));
	}

	// Whenever the action is dipatched from an action creator
	private dispatcherCallback(action: any) {
		switch(action.actionType){
			case actionType.SELECT_SOLUTION_ITEM:
				let selectAction = action as selectSolutionItemaction;
				if (selectAction.itemIndex > 0) {
					this._selectedSolutionItemIndex = selectAction.itemIndex;
					this._selectedSolutionItemName = selectAction.itemName;
					this.emit(SolutionsStore.SOLUTION_ITEM_SELECTED);
				}
				break;
		}
	}

	// Gets the index of the selected solution item.
	public get selectedSolutionItemIndex(): number{
		return this._selectedSolutionItemIndex;
	}
}

let instance = new SolutionsStore();
export = {SolutionsStore, instance};