import * as React from 'react';

interface Props {
	name?: string;
}

// This is a stateless component
export const Footer = (props: Props) => {
	return (
	<div>
		<section className="bg-primary" id="footer">
	        <div className="container">
	            <div className="row">
	                <div className="col-lg-8 col-lg-offset-2 text-center">
	                    <p className="col-lg-offset-4 text-center footer-class">Copyright © iBints Pvt. Ltd. 2017</p>
	                </div>	                
	            </div>
	        </div>
	    </section>
    </div>);
}