import * as React from 'react';
import * as ReactDOM from 'react-dom';
import solutionsStore = require('../stores/solutionsstore');

interface Props{
	resourceFileData?: any;
}

class SolutionsContent extends React.Component<Props, null> {
	constructor(props:Props) {
		super(props);
	}

	public render() {
		let heading = this.heading;
		let contentId = heading.replace(/\s/g,'');
		return (			
            <div className="container" id={contentId}>
                <div className="col-md-9">
					<div className="breadcrumb">
					    <h2>{heading}</h2>
					</div>
				</div>
				<div className='col-md-9'>
					{this.contentToDisplay}		
				</div>		
            </div>
		);
	}

	public componentDidMount() {
		this.setScrollPosition();
	}

	public componentDidUpdate() {
		this.setScrollPosition();
	}

	// Gets the content including images to display for the selected solution item
	private get contentToDisplay(): Array<JSX.Element> {
		let displayContent:Array<JSX.Element> = new Array<JSX.Element>();
		let dataList = this.props.resourceFileData.solutionsPage.solutionsListItems;
		let dataArray = Object.keys(dataList).map(function(i) { return dataList[i] });
		let index = solutionsStore.instance.selectedSolutionItemIndex;
		let selectedContent = (index === 0 ? dataArray[index].content : dataArray[index - 1].content);
		// converting it to an array
		selectedContent = Object.keys(selectedContent).map(function(i){return selectedContent[i]});
		if (selectedContent.length > 0) {			
			for (let content of selectedContent) {	
				if (content.heading) {
					let heading = (
									<div className="col-md-12">
										<h3>{content.heading}</h3>
									 </div>									  	
									);
					displayContent.push(heading);
				}			
				if (content.content){
					let paragraph = (
										<p className='col-md-12'>{content.content}</p>									  	
									);
					displayContent.push(paragraph);
				}
				if (content.image){
					let image = (	<div className="col-md-6">
										<img className="img-responsive" src={content.image}></img>
									 </div>
									);
					displayContent.push(image);
				}
			}
		}
		return displayContent;
	}

	// Gets the heading for the content
	private get heading(): string {
		let heading: string = '';
		let index = solutionsStore.instance.selectedSolutionItemIndex;
		let dataList = this.props.resourceFileData.solutionsPage.solutionsListItems;
		let dataArray = Object.keys(dataList).map(function(i) { return dataList[i] });
		heading = index === 0 ? dataArray[index].name : dataArray[index - 1].name;
		return heading;
	}


	// sets the scroll position to the top of the content heading
	private setScrollPosition =() => {	
		let parentComponent = document.getElementById('solutionsPage');
		parentComponent.scrollIntoView({block: 'start', behavior: 'smooth'});
	}
}

export = SolutionsContent;