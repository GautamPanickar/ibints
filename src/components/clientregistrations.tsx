import * as React from 'react';
import Table =  require('../components/table');
import HTMLUtilities = require('../utilities/htmlutilities');

interface Props{
	resourceFileData?: any;
	registrationsResourceFileData?: any;
}

class ClientRegistrations extends React.Component<Props, null> {
	constructor(props: Props) {
		super(props);
	}

	public render() {
		return (
			<section id="clientRegistrationsPage">
				<div className="container">
					<div className="row">
		            	<div className="col-md-12">
		                	<h3>{this.props.resourceFileData.clientRegistrationsPage.heading}</h3>
		                	<hr className="line-primary"></hr>
		                	<br></br>
		                	{this.getContentToDisplay()}
		            	</div>
		            	<br></br>
		            	<Table registrationsResourceFileData={this.props.registrationsResourceFileData}
		            	/>			            
	        		</div>
	    		</div>
	    	</section>
		);
	}

	// The paragraphs to display
	private getContentToDisplay = ():Array<JSX.Element> =>{
		let paragraphs:Array<JSX.Element> = new Array<JSX.Element>();
		let dataList = this.props.resourceFileData.clientRegistrationsPage.content;
		let dataArray = Object.keys(dataList).map(function(i) { return dataList[i] });
		if (dataArray.length > 0) {
			for(let paragraph of dataArray) {
				paragraphs.push(<p key={HTMLUtilities.UID} className='col-md-12'>{paragraph}</p>);
			}
		}
		
		return paragraphs;
	}
}

export = ClientRegistrations;