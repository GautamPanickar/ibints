import Dispatcher = require('./dispatcher');
import loadResourceFileAction =  require('../actions/loadresourcefileaction');

const resourceFileData = require('../../resourcefile.json');

/* The resource file action creator */
class ResourceFileActionCreator {

	/* For loading resource files */
	public static loadResourceFile() {
		let resourceFileDataLoaded: boolean = resourceFileData ? true : false;
		new loadResourceFileAction(resourceFileDataLoaded, resourceFileData);
	}
}

export = ResourceFileActionCreator;