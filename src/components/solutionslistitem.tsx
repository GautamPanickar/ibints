import * as React from 'react';
import solutionsActionCreator = require('../actioncreators/solutionsactioncreator');

interface Props {
	id: number;
	text: string;
	isActive: boolean;
}

interface State {
	isActive: boolean;
}

class SolutionsListItem extends React.Component<Props, State> {
	constructor(props: Props, state: State){
		super(props, state);
		this.state = {
			isActive: false
		};
	}

	public render() {
		let listItemClassName = 'list-group-item';
		listItemClassName = listItemClassName.concat(this.props.isActive ? ' active-orange': '');
		return (
			<a className={listItemClassName} id={'item-' + this.props.id} onClick={this.onSelectingItem}>
				{this.props.text}
			</a>
		);
	}

	private onSelectingItem = () => {
		solutionsActionCreator.selectSolutionItem(this.props.id, this.props.text);
	}
}

export = SolutionsListItem;