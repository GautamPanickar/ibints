import Dispatcher = require('./dispatcher');
import loadResourceFileAction =  require('../actions/loadresourcefileaction');

const resourceFileData = require('../../resourcefile.json');
const newsFileData = require('../../newsresourcefile.json');
const registrationsFileData = require('../../registrationsresourcefile.json');

/* The resource file action creator */
class ResourceFileActionCreator {

	/* For loading resource files */
	public static loadResourceFile() {
		let resourceFileDataLoaded: boolean = resourceFileData ? true : false;
		let newsFileDataLoaded: boolean = newsFileData ? true : false;
		let registrationsFileDataLoaded: boolean = registrationsFileData ? true : false;
		new loadResourceFileAction((resourceFileDataLoaded && newsFileDataLoaded && registrationsFileDataLoaded), 
			resourceFileData, newsFileData, registrationsFileData);
	}
}

export = ResourceFileActionCreator;