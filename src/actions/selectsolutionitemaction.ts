import ActionType = require('./typings/actiontypes');
import Dispatcher = require('../actioncreators/dispatcher');

// Select solution item action
class SelectSolutionItemAction {
	private _itemIndex: number;
	private _itemName?: string;

	// The constructor
	constructor(itemIndex: number, itemName: string) {		
		this._itemIndex = itemIndex;
		this._itemName = itemName;
		Dispatcher.dispatch({
			actionType: ActionType.SELECT_SOLUTION_ITEM, 
			itemIndex: this.itemIndex,
			itemName: this.itemName
		});
	}

	// Gets the index of the selected solution item.
	public get itemIndex (): number{
		return this._itemIndex;
	}

	// Gets the name of the selected solution item.
	public get itemName(): string{
		return this._itemName;
	}
}

export = SelectSolutionItemAction;