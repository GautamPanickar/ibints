import selectSolutionItemAction =  require('../actions/selectsolutionitemaction');


/* The solutions action creator */
class SolutionActionCreator {

	/* For selecting solution itrm */
	public static selectSolutionItem(itemIndex: number, itemName: string) {
		new selectSolutionItemAction(itemIndex, itemName);
	}
}

export = SolutionActionCreator;