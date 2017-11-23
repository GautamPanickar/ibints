import * as React from 'react';
import HTMLUtilities = require('../utilities/htmlutilities');

interface Props{
	registrationsResourceFileData?: any;
}

class Table extends React.Component<Props, null> {
	constructor(props: Props) {
		super(props);
	}

	public render() {
		return (
			<div className="col-md-12" id='clientRegistrationTable'>
            	<table className="table">
				  <thead className='thead-inverse thead-primary'>
						<tr>
							{this.getTableHeader()}
						</tr>
					</thead>
					<tbody>
						{this.getTableContents()}
				    </tbody>
				</table>
        	</div>	
		);
	}

	// Returns the table heading.
	private getTableHeader = ():Array<JSX.Element> =>{
		let headings:Array<JSX.Element> = new Array<JSX.Element>();
		let dataList = this.props.registrationsResourceFileData.columnHeading;
		let dataArray = Object.keys(dataList).map(function(i) { return dataList[i] });
		if (dataArray.length > 0) {
			for(let heading of dataArray) {
				headings.push(<th key={HTMLUtilities.UID}>{heading}</th>);
			}
		}		
		return headings;
	}

	// Returns the tablecontents
	private getTableContents = ():Array<JSX.Element> =>{
		let rows:Array<JSX.Element> = new Array<JSX.Element>();
		let dataList = this.props.registrationsResourceFileData.clients;
		let dataArray = Object.keys(dataList).map(function(i) { return dataList[i] });
		if (dataArray.length > 0) {
			for(let row of dataArray) {
				rows.push( <tr key={HTMLUtilities.UID}>
								<td>{row.regNo}</td>
								<td>{row.name}</td>
								<td>{row.location}</td>
								<td>{row.remarks}</td>
							</tr>);
			}
		}		
		return rows;
	}
}

export = Table;