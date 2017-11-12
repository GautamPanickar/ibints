import * as React from 'react';
import SolutionsListItem = require('../components/solutionslistitem');
import solutionsStore = require('../stores/solutionsstore');

interface Props {
	resourceFileData?: any;
}

class SolutionsListGroup extends React.Component<Props, null> {
	constructor(props: Props){
		super(props);
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

	// Gets the list items to display
	public get itemsToDisplay(): Array<JSX.Element> {
		let listItems:Array<JSX.Element> = new Array<JSX.Element>();
		let selectedIndex = solutionsStore.instance.selectedSolutionItemIndex;
		let dataList = this.props.resourceFileData.solutionsPage.solutionsListItems;
		let dataArray = Object.keys(dataList).map(function(i) { return dataList[i] });
		let index: number = 0;
		for(let data of dataArray) {
			index++;
			listItems.push(<SolutionsListItem
						id={index}
						text={data.name}
						isActive={selectedIndex === 0 ? selectedIndex === index - 1:
						 selectedIndex === index}/>);
			
		}
		return listItems;
	}
}

export = SolutionsListGroup;