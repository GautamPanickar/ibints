import * as React from 'react';
import SolutionsListGroup = require('../components/solutionslistgroup');

interface Props{
	resourceFileData?: any;
}

interface State {

}

class SolutionsContainer extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}

	public render() {
		
		return (
			<section id="solutionsPage">
				<div className="container">
					<div className="row">
		            	<div className="col-lg-8">
		                	<h2>{this.props.resourceFileData.solutionsPage.heading}</h2>
		                	<hr className="line-solutions"></hr>
		            	</div>	            
	        		</div>
	        		<div className="row">
	        			<SolutionsListGroup resourceFileData={this.props.resourceFileData}/>
	        		</div>
	    		</div>
	    	</section>
		);
	}
}

export = SolutionsContainer;