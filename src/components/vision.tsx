import * as React from 'react';

interface Props {
	resourceFileData?: any;
}

export class Vision extends React.Component<Props, null> {
	public render() {
		return (
		    <section className="bg-dark" id="vision" ref={'vision'}>
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
			                <div className="hover01 column">
							    <figure><img src="img/vision.jpg" /></figure>
							 </div>
						</div>
		            </div>
		        </div>
		    </section>);
	}
}