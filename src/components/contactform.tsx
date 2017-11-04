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

	public render(){
		return (
			<section id="contactPage">
				<div className="container">
					<div className="row">
		            	<div className="col-md-8">
		                	<h3>{this.props.resourceFileData.contactPage.heading}</h3>
		                	<hr className="line-dark"></hr>
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
		                    <div id="success"></div>
		                    <button className="btn btn-default-dark">Send Message</button>
		                </form>
		            </div>
		            <div className="col-md-4" >
		                <h3>Contact Details</h3>
		                <p>
		                    iBints pvt ltd.<br></br>Vembayam, Kuthirakulam PO<br></br>
		                    Trivandrum-695615<br></br>
		                    Kerala-India<br></br>
		                </p>
		                <p><i className="fa fa-phone"></i> 
		                    <abbr title="Phone">P</abbr>: +917592915008</p>
		                <p><i className="fa fa-envelope-o"></i> 
		                    <abbr title="Email">E</abbr>: <a href="mailto:info@ibints.com">info@ibints.com</a>
		                </p>
		                <ul className="list-unstyled list-inline list-social-icons">
		                    <li>
		                        <a href="http://ibints.com/contact.php#"><i className="fa fa-facebook-square fa-2x"></i></a>
		                    </li>
		                    <li>
		                        <a href="http://ibints.com/contact.php#"><i className="fa fa-linkedin-square fa-2x"></i></a>
		                    </li>
		                    <li>
		                        <a href="http://ibints.com/contact.php#"><i className="fa fa-twitter-square fa-2x"></i></a>
		                    </li>
		                    <li>
		                        <a href="http://ibints.com/contact.php#"><i className="fa fa-google-plus-square fa-2x"></i></a>
		                    </li>
		                </ul>
		            </div>
	        </div>
	    </div>
	    </section>
		);
	}
}

export = ContactForm;