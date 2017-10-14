import * as React from 'react';

interface Props {
	resourceFileData?: any;
}

// This is a stateless component
export const About = (props: Props) => {
	return (
	<div>
		<section className="bg-primary" id="about">
	        <div className="container">
	            <div className="row">
	            	<div className="hover08 column">
					    <div>
					        <figure><img src="img/image003.jpg" /></figure>
					    </div>
					 </div>
	                <div className="col-lg-8 col-lg-offset-2 text-center">
	                    <h2 className="section-heading text-black-dark">{props.resourceFileData.homePage.about.aboutHeader}</h2>
	                    <hr className="light"></hr>
	                    <p className="text-faded">{props.resourceFileData.homePage.about.about_para_1}</p>
	                    <p className="text-faded">{props.resourceFileData.homePage.about.about_para_2}</p>
	                    <p className="text-faded">{props.resourceFileData.homePage.about.about_para_3}</p>
	                    <br></br>
	                    <a href="#vision" className="page-scroll btn btn-default-dark btn-xl sr-button">
	                    	{props.resourceFileData.homePage.seOurVision}
	                    </a>
	                </div>
	            </div>
	        </div>
	    </section>
	    <section className="bg-dark" id="vision">
	        <div className="container">
	            <div className="row">
	                <div className="col-lg-8 col-lg-offset-2 text-center">
	                    <h2 className="section-heading text-white">{props.resourceFileData.homePage.vision.visionHeader}</h2>
	                    <hr className="light"></hr>
	                    <p className="text-white">{props.resourceFileData.homePage.vision.vision_para_1}</p>
	                    <p className="text-white">{props.resourceFileData.homePage.vision.vision_para_2}</p>
	                    <p className="text-white">{props.resourceFileData.homePage.vision.vision_para_3}</p>
	                    <br></br>
	                </div>
	            </div>
	        </div>
	    </section>
    </div>);
}