import { h, Component } from 'preact';
import { auth, database } from '../firebase';
import ExerciseList from './ExerciseList';
import SignIn from '../SignIn';

export default class Exercises extends Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	render() {
		const currentUser = this.state;

		return (
			<section>
				{!currentUser && <SignIn />}
				{currentUser && <ExerciseList />}
			</section>
		);
	}
}
