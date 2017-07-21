import { h, Component } from 'preact';
import { auth } from '../../firebase';

export default class ExerciseList extends Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	componentDidMount() {
		auth.onAuthStateChanged(currentUser => {
			this.setState({ currentUser });
		});
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
