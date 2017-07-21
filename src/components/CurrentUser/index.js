import { h, Component } from 'preact';

export default class CurrentUser extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<article>
				<img alt="Placeholder" src="http://placehold.it/80x80" />
				<button>Sign Out</button>
			</article>
		);
	}
}
