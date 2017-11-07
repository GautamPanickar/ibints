import * as React from 'react';
import SolutionsListItem = require('../components/solutionslistitem');
import solutionsStore = require('../stores/solutionsstore');

interface Props {
	resourceFileData?: any;
}

interface State {
	selectedIndex: number;
}

class SolutionsListGroup extends React.Component<Props, State> {
	constructor(props: Props, state: State){
		super(props, state);
		this.state = {
			selectedIndex: 0
		};
	}

	public render() {
		return (
			<div className='col-md-3'>
				<div className='list-group'>
					{this.itemsToDisplay}
				</div>
			</div>
		);
	}

	public componentDidMount() {
		solutionsStore.instance.addListener(solutionsStore.SolutionsStore.SOLUTION_ITEM_SELECTED, this.onSolutionItemSelection);
	}

	public componentWillUnmount() {
		solutionsStore.instance.removeListener(solutionsStore.SolutionsStore.SOLUTION_ITEM_SELECTED, this.onSolutionItemSelection);
	}

	// Gets the list items to display
	public get itemsToDisplay(): Array<JSX.Element> {
		let listItems:Array<JSX.Element> = new Array<JSX.Element>();
		let dataList = this.props.resourceFileData.solutionsPage.solutionsListItems;
		let dataArray = Object.keys(dataList).map(function(i) { return dataList[i] });
		let index: number = 0;
		for(let data of dataArray) {
			index++;
			listItems.push(<SolutionsListItem
							id={index}
							text={data.name}
							isActive={this.state.selectedIndex === index}/>);
		}
		return listItems;
	}

	// On selecting a solution item.
	private onSolutionItemSelection = () =>{
		this.setState({
			selectedIndex: solutionsStore.instance.selectedSolutionItemIndex
		});
	}
}

export = SolutionsListGroup;