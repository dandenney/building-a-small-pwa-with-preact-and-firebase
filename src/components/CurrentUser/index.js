import { h, Component } from 'preact';

export default class CurrentUser extends Component {
	constructor() {
		super();
	}

	render() {
		const user = this.props.user;
		return (
			<article>
				<img alt={user.displayName} src={user.photoURL} width="40" />
				<button>Sign Out</button>
			</article>
		);
	}
}
