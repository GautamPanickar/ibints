import * as React from 'react';

interface Props {
	resourceFileData?: any;
}

interface State {

}

class SolutionsListGroup extends React.Component<Props, State> {
	constructor(props: Props, state: State){
		super(props, state);
	}

	public render() {
		return (
			<div className='col-md-3'>
				<div className='list-group'>
				</div>
			</div>
		);
	}
}

export = SolutionsListGroup;