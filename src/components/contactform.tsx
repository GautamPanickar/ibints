import * as React from 'react';
import { TextField } from '../components/textfield'; 

interface Props{
	resourceFileData?: any;
}

interface State {

}

class ContactForm extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}

	public render() {
		let contactDetailsModal = (<div className="col-md-4 bg-primary text-black-dark" >
					                <h3>{this.props.resourceFileData.contactPage.contactDetails}</h3>
					                <hr className="line-dark"></hr>
					                <p className="text-faded">
					                    {this.props.resourceFileData.companyFullName}<br></br>
					                    {this.props.resourceFileData.contactPage.address.line1}, 
					                    {this.props.resourceFileData.contactPage.address.line2}<br></br>
					                    {this.props.resourceFileData.contactPage.address.line3}<br></br>
					                    {this.props.resourceFileData.contactPage.address.line4}<br></br>
					                </p>
					                <p className="text-faded">{this.props.resourceFileData.contactPage.address.phone}</p>
					                <p className="text-faded">
					                	<a className="text-faded" href={this.props.resourceFileData.contactPage.address.mailAddress}>
					                		{this.props.resourceFileData.contactPage.address.email}
					                	</a>
					                </p>
					            </div>);
		return (
			<section id="contactPage">
				<div className="container">
					<div className="row">
		            	<div className="col-md-8">
		                	<h3>{this.props.resourceFileData.contactPage.heading}</h3>
		                	<hr className="line-primary"></hr>
			                <form>
			                    <TextField labelName={this.props.resourceFileData.contactPage.labels.name}
			                    	id='name'
			                    	placeHolder={this.props.resourceFileData.contactPage.labels.namePlaceholder}
			                    />
			                    <TextField labelName={this.props.resourceFileData.contactPage.labels.phone}
			                    	id='phone'
			                    	placeHolder={this.props.resourceFileData.contactPage.labels.phonePlaceholder}
			                    />
			                    <TextField labelName={this.props.resourceFileData.contactPage.labels.email}
			                    	id='email'
			                    	placeHolder={this.props.resourceFileData.contactPage.labels.emailPlaceholder}
			                    />
			                    <TextField labelName={this.props.resourceFileData.contactPage.labels.subject}
			                    	id='subject'
			                    	placeHolder={this.props.resourceFileData.contactPage.labels.subjectPlaceholder}
			                    />
			                    <TextField labelName={this.props.resourceFileData.contactPage.labels.message}
			                    	id='message'
			                    	placeHolder={this.props.resourceFileData.contactPage.labels.messagePlaceholder}
			                    />
			                    <button id='sendMessageButton' className="btn btn-default-dark">Send Message</button>
			                </form>
		            	</div>
		            	{contactDetailsModal}		            
	        		</div>
	    		</div>
	    	</section>
		);
	}
}

export = ContactForm;