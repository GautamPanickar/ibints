const actionType =  require('../actions/typings/actiontypes');
import Dispatcher = require('../actioncreators/dispatcher');
import { EventEmitter } from 'events';
import loadResourceFileAction = require('../actions/loadresourcefileaction');


// The resource file store
class ResourceFileStore extends EventEmitter {

	// data variables
	private resourceFileData:any = null;
	private newsResourceFileData:any = null;
	private registrationsResourceFileData:any = null;

	// Events
	private static RESOURCE_FILE_LOADED:string = 'ResourceFileLoaded';
	

	// The store constructor
	constructor() {
		super();
		// Registering the call back
		Dispatcher.register(this.dispatcherCallback.bind(this));
	}

	// Whenever the action is dipatched from ana ction creator
	private dispatcherCallback(action: any) {
		switch(action.actionType){
			case actionType.LOAD_RESOURCE_FILE:
				let loadAction = action as loadResourceFileAction;
				if (loadAction.isResourceFileDataAvailable) {
					this.resourceFileData = loadAction.resourceFileData;
					this.newsResourceFileData = loadAction.newsFileData;
					this.registrationsResourceFileData = loadAction.registrationsFileData;
					this.emit(ResourceFileStore.RESOURCE_FILE_LOADED);
				}
				break;
		}
	}

	// Gets the data from the store
	public get resourceFile(): any{
		return this.resourceFileData;
	}

	// Gets the news data from the store
	public get newsResourceFile(): any{
		return this.newsResourceFileData;
	}

	// Gets the registrations data from the store
	public get registrationsResourceFile(): any{
		return this.registrationsResourceFileData;
	}
}

export = new ResourceFileStore;