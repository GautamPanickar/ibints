import ActionType = require('./typings/actiontypes');
import Dispatcher = require('../actioncreators/dispatcher');

// Load resource file action
class LoadResourceFileAction {
	private _isDataAvailable: boolean = false;
	private _data?: any;
	private _newsData?: any;
	private _registrationsData?: any;

	// The constructor
	constructor(isDataAvailable: boolean, data: any, newsData: any, registrationsData: any) {		
		this._isDataAvailable = isDataAvailable;
		this._data = data;
		this._newsData = newsData;
		this._registrationsData = registrationsData;
		Dispatcher.dispatch({
			actionType: ActionType.LOAD_RESOURCE_FILE, 
			isResourceFileDataAvailable: this.isResourceFileDataAvailable,
			resourceFileData: this.resourceFileData,
			newsFileData: this.newsFileData,
			registrationsFileData: this.registrationsFileData
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

	// Gets the news file data
	public get newsFileData(): any{
		return this._newsData;
	}

	// Gets the registrations file data
	public get registrationsFileData(): any{
		return this._registrationsData;
	}
}

export = LoadResourceFileAction;