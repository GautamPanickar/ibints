import ActionType = require('./typings/actiontypes');
import Dispatcher = require('../actioncreators/dispatcher');

// Load resource file action
class LoadResourceFileAction {
	private _isDataAvailable: boolean = false;
	private _data?: any;

	// The constructor
	constructor(isDataAvailable: boolean, data: any) {		
		this._isDataAvailable = isDataAvailable;
		this._data = data;
		Dispatcher.dispatch({
			actionType: ActionType.LOAD_RESOURCE_FILE, 
			isResourceFileDataAvailable: this.isResourceFileDataAvailable,
			resourceFileData: this.resourceFileData
		});
	}

	// Gets if data is available
	public get isResourceFileDataAvailable (): boolean{
		return this._isDataAvailable;
	}

	// Gets the data
	public get resourceFileData(): any{
		return this._data;
	}
}

export = LoadResourceFileAction;