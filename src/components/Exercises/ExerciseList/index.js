import { h, Component } from 'preact';

export default class extends Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	render() {
		return (
			<ul>
				<li>Exercise</li>
				<li>Exercise</li>
			</ul>
		);
	}
}
