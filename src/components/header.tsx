import React = require ('react');
import ReactDOM = require ('react-dom');
import About = require ('../../src/components/about');
import { Vision } from '../../src/components/vision';
import NewsContainer = require ('../../src/components/newscontainer');

// The props
interface Props 
{ 
	resourceFileData?: any;
	newsResourceFileData?: any;
	scrollToView?: string;
}

export class Header extends React.Component<Props, null> {
	/* The constructor is called even before the component is mounted */
	constructor(props: Props){
		super(props);
		this.scrollToAbout = this.scrollToAbout.bind(this);
		this.scrollToVision = this.scrollToVision.bind(this);
		this.scrollToNews = this.scrollToNews.bind(this);
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
        let news = this.props.resourceFileData ?
        			<NewsContainer resourceFileData={this.props.resourceFileData} 
        				newsResourceFileData={this.props.newsResourceFileData}
        				ref={'news'} onAboutClick={this.scrollToAbout}/> : null;
		return (
			<div id='headerElement'>
				{this.renderHeader()}
				{news}
				{about}
				{vision}
			</div>
		);
	}


	// Renders the header
	private renderHeader(): JSX.Element {
		if (this.props.resourceFileData) {
			let headerStyle:React.CSSProperties = {
				    backgroundImage: 'url(img/header4.jpg)'
			};
			return (
				<section id="home" className='skip-session-padding' ref={'home'} style={headerStyle}>
		            <div className="container">		            	
		                <div className="header-content"> 
		                    <div className="header-content-inner center-alignment">		                    	
		                        <h1>
		                            {this.props.resourceFileData.companyName + '-' + this.props.resourceFileData.companyWelcomeTag}
		                        </h1>
		                        <hr className="primary"></hr>
		                        <br></br>
		                        <p>{this.props.resourceFileData.homePage.welcomeMessage.welcomeMessageContent_para_1}
		                        {this.props.resourceFileData.homePage.welcomeMessage.welcomeMessageContent_para_2}</p>
		                        <button className="btn btn-primary btn-xl page-scroll" onClick={this.scrollToNews}>
		                        	{this.props.resourceFileData.homePage.welcomeMessage.buttonText}
		                        </button>
		                    </div>
		                </div>
		            </div>
		        </section>
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
		} else if (this.props.scrollToView === 'News') {
			this.scrollToNews();
		} 
	}

	// Call back from about component, happens on clicking 'see our vision' button.
	private scrollToVision =() => {		
		ReactDOM.findDOMNode(this.refs.vision).scrollIntoView({block: 'start', behavior: 'smooth'});
	}

	// Scrolls to news container
	private scrollToNews =(): void => {
		ReactDOM.findDOMNode(this.refs.news).scrollIntoView({block: 'start', behavior: 'smooth'});
	}
}