import changeNewsAction =  require('../actions/changenewsaction');
import enums = require('../utilities/enums');

/* The news action creator */
class NewsActionCreator {

	/* For changing */
	public static changeNews(currentIndex: number, newIndex: number, changeTo: enums.News) {
		new changeNewsAction(currentIndex, newIndex, changeTo);
	}
}

export = NewsActionCreator;