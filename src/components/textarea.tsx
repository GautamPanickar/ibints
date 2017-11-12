import * as React from 'react';

interface Props {
	labelName: string;
	id: string;
	placeHolder: string;
	rows: number;
	columns: number
}

// This is a stateless component
export const TextArea = (props: Props) => {
	return (
		<div className="control-group form-group">
	        <div className="controls">
	            <label>{props.labelName}</label>
	            <textarea  className="form-control" id={props.id} placeholder={props.placeHolder} 
	            	rows={props.rows} cols={props.columns}>
	            </textarea>
	            <p className="help-block"></p>
	        </div>
	    </div>
	);
}