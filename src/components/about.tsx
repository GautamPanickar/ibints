import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
	resourceFileData?: any;
	onVisionViewButtonCick:Function;
}

interface State {
	
}

class About extends React.Component<Props, State> {
	constructor(props: Props, state: State) {
		super(props, state);
	}

	public render() {
		return (
			<section className="bg-primary" id="about" ref={'about'}>
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
		                    <button className="page-scroll btn btn-default-dark btn-xl sr-button" onClick={this.onViewVision}>
		                    	{this.props.resourceFileData.homePage.seOurVision}
		                    </button>
		                </div>
		            </div>
		        </div>
		    </section>);
	}	

	private onViewVision = () => {
		this.props.onVisionViewButtonCick;
	}
}

export = About;