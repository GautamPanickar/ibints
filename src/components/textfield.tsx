import * as React from 'react';

interface Props {
	labelName: string;
	id: string;
	placeHolder: string;

}

// This is a stateless component
export const TextField = (props: Props) => {
	return (
		<div className="control-group form-group">
	        <div className="controls">
	            <label>{props.labelName}</label>
	            <input type="text" className="form-control" id={props.id} placeholder={props.placeHolder}>
	            </input>
	            <p className="help-block"></p>
	        </div>
	    </div>
	);
}