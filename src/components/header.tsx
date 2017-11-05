import React = require ('react');
import ReactDOM = require ('react-dom');
import About = require ('../../src/components/about');
import { Vision } from '../../src/components/vision';

// The props
interface Props 
{ 
	resourceFileData?: any;
	scrollToView?: string;
}

export class Header extends React.Component<Props, null> {
	/* The constructor is called even before the component is mounted */
	constructor(props: Props){
		super(props);
		this.scrollToAbout = this.scrollToAbout.bind(this);
		this.scrollToVision = this.scrollToVision.bind(this);
		this.setScrollPosition = this.setScrollPosition.bind(this);
	}

	public componentDidMount() {
		this.setScrollPosition();
	}

	public componentDidUpdate() {
		this.setScrollPosition();
	}

	// The render method
	public render() {
		let about = this.props.resourceFileData ?
                    <About resourceFileData={this.props.resourceFileData}
                     onVisionViewButtonCick={this.scrollToVision}
                     ref={'about'}/> : null;
        let vision = this.props.resourceFileData ?
        			 <Vision resourceFileData={this.props.resourceFileData} ref={'vision'}/> : null;
		return (
			<div id='headerElement'>
				{this.renderHeader()}
				{about}
				{vision}
			</div>
		);
	}


	// Renders the header
	private renderHeader(): JSX.Element {
		if (this.props.resourceFileData) {
			return (
				<header id="home" ref={'home'}>				
					<img id="headerBackGroundImage" src="img/header4.jpg"></img>	
	                <div className="header-content">
	                    <div className="header-content-inner">
	                        <h1 id="homeHeading">
	                        	{this.props.resourceFileData.companyName + '-' + this.props.resourceFileData.companyWelcomeTag}
	                    	</h1>
	                        <hr></hr>
	                        <p>{this.props.resourceFileData.homePage.welcomeMessage.welcomeMessageContent_para_1}
	                        {this.props.resourceFileData.homePage.welcomeMessage.welcomeMessageContent_para_2}</p>
	                        <button className="btn btn-primary btn-xl page-scroll" onClick={this.scrollToAbout}>
	                        	{this.props.resourceFileData.homePage.welcomeMessage.buttonText}
	                        </button>
	                    </div>
	                </div>
	            </header> 
			);
		} else {
			return null;
		}
	}

	// move to about section
	private scrollToAbout =(): void => {
		ReactDOM.findDOMNode(this.refs.about).scrollIntoView({block: 'start', behavior: 'smooth'});
	}

	// Called on component mounting and updating
	private setScrollPosition =(): void =>{
		if (this.props.scrollToView === 'Home') {
			ReactDOM.findDOMNode(this.refs.home).scrollIntoView({block: 'start', behavior: 'smooth'});
		} else if (this.props.scrollToView === 'About') {
			this.scrollToAbout();
		}
	}

	// Call back from about component, happens on clicking 'see our vision' button.
	private scrollToVision =() => {		
		console.log('sdfgdfhgsdfhfhg');
		ReactDOM.findDOMNode(this.refs.vision).scrollIntoView({block: 'start', behavior: 'smooth'});
	}
}