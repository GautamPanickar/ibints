import * as React from 'react';
import SolutionsListGroup = require('../components/solutionslistgroup');
import solutionsStore = require('../stores/solutionsstore');
import SolutionsContent = require('../components/solutionscontent');

interface Props{
	resourceFileData?: any;
}

interface State {
	selectedIndex: number;
}

class SolutionsContainer extends React.Component<Props, State> {
	constructor(props: Props, state: State) {
		super(props);
		this.state = {
			selectedIndex: 0
		};
	}

	public render() {
		
		return (
			<section id="solutionsPage" ref='solutions'>
				<div className="container">
					<div className="row">
		            	<div className="col-lg-8">
		                	<h2>{this.props.resourceFileData.solutionsPage.heading}</h2>
		                	<hr className="line-solutions"></hr>
		            	</div>	            
	        		</div>
	        		<div className="row">
	        			<SolutionsListGroup 
	        				resourceFileData={this.props.resourceFileData}
	        			/>
	        			<SolutionsContent
	        				resourceFileData={this.props.resourceFileData}
	        			/>
	        		</div>
	    		</div>
	    	</section>
		);
	}

	public componentDidMount() {
		solutionsStore.instance.addListener(solutionsStore.SolutionsStore.SOLUTION_ITEM_SELECTED, this.onSolutionItemSelection);
	}

	public componentWillUnmount() {
		solutionsStore.instance.removeListener(solutionsStore.SolutionsStore.SOLUTION_ITEM_SELECTED, this.onSolutionItemSelection);
	}

	// On selecting a solution item.
	private onSolutionItemSelection = () => {
		this.setState({
			selectedIndex: solutionsStore.instance.selectedSolutionItemIndex
		});
	}
}

export = SolutionsContainer;