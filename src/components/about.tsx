import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
	resourceFileData?: any;
	scrollToView?: string;
}

interface State {
}

class About extends React.Component<Props, State> {
	constructor(props: Props, state: State) {
		super(props, state);
	}

	public render() {
		return (
		<div>
			<section className="bg-primary" id="about">
		        <div className="container">
		            <div className="row">	  
		                <div className="col-lg-6">
			                <div className="hover08 column">
							    <div>
							        <figure><img src="img/about.jpg" /></figure>
							    </div>
							 </div>
						</div>
						<div className="col-lg-6 text-left">
		                    <h2 className="section-heading text-black-dark text-center">{this.props.resourceFileData.homePage.about.aboutHeader}</h2>
		                    <hr className="light"></hr>
		                    <p className="text-faded">{this.props.resourceFileData.homePage.about.about_para_1}</p>
		                    <p className="text-faded">{this.props.resourceFileData.homePage.about.about_para_2}</p>
		                    <p className="text-faded">{this.props.resourceFileData.homePage.about.about_para_3}</p>
		                    <br></br>
		                    <a href="#vision" className="page-scroll btn btn-default-dark btn-xl sr-button">
		                    	{this.props.resourceFileData.homePage.seOurVision}
		                    </a>
		                    
		                </div>
		            </div>
		        </div>
		    </section>
		    <section className="bg-dark" id="vision">
		        <div className="container">
		            <div className="row">
		                <div className="col-lg-6 text-left">
		                    <h2 className="section-heading text-white text-center">{this.props.resourceFileData.homePage.vision.visionHeader}</h2>
		                    <hr className="light"></hr>
		                    <p className="text-white">{this.props.resourceFileData.homePage.vision.vision_para_1}</p>
		                    <p className="text-white">{this.props.resourceFileData.homePage.vision.vision_para_2}</p>
		                    <p className="text-white">{this.props.resourceFileData.homePage.vision.vision_para_3}</p>
		                    <br></br>
		                </div>
		                <div className="col-lg-6">
			                <div className="hover08 column">
							    <div>
							        <figure><img src="img/vision.jpg" /></figure>
							    </div>
							 </div>
						</div>
		            </div>
		        </div>
		    </section>
	    </div>);
	}
	
	public componentDidMount() {
		//once the component is rendered we'll update the scroll positions.
		if (this.props.scrollToView != null){
			this.scrollToSection(this.props.scrollToView);
		}
	}

	private scrollToSection = (section: string): void => {
		let dom = ReactDOM.findDOMNode(this);
		switch (section) {
			case 'About':
				dom.children[0].scrollIntoView;
				break;
		}
	}
}

export = About;