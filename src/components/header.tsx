import React = require ('react');
import { About } from  '../../src/components/about';

// The props
interface Props 
{ 
	resourceFileData?: any;
	scrollToAbout?: boolean;
}

// The state
interface State{
	displayHeader: boolean;
}

export class Header extends React.Component<Props, State> {
	/* The constructor is called even before the component is mounted */
	constructor(props: Props){
		super(props);
		this.state = {
			displayHeader: false
		}
	}

	// The render method
	public render() {
		let about = this.props.resourceFileData ?
                    <About resourceFileData={this.props.resourceFileData}/> : null;
		return (
			<div>
				{this.renderHeader()}
				{about}
			</div>
		);
	}


	// Renders the header
	private renderHeader(): JSX.Element {
		if (this.props.resourceFileData) {
			return (
				<header id="home">				
					<img id="headerBackGroundImage" src="img/header4.jpg"></img>	
	                <div className="header-content">
	                    <div className="header-content-inner">
	                        <h1 id="homeHeading">
	                        	{this.props.resourceFileData.companyName + '-' + this.props.resourceFileData.companyWelcomeTag}
	                    	</h1>
	                        <hr></hr>
	                        <p>{this.props.resourceFileData.homePage.welcomeMessage.welcomeMessageContent_para_1}
	                        {this.props.resourceFileData.homePage.welcomeMessage.welcomeMessageContent_para_2}</p>
	                        <a href="#about" className="btn btn-primary btn-xl page-scroll">
	                        	{this.props.resourceFileData.homePage.welcomeMessage.buttonText}
	                        </a>
	                    </div>
	                </div>
	            </header> 
			);
		} else {
			return null;
		}
	}
}