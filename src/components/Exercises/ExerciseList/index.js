import { h, Component } from 'preact';
import { auth, database } from '../../firebase';
import { map } from 'lodash';
import Exercise from '../Exercise';

export default class ExerciseList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null
		};
	}

	handleFailed(key) {
		const currentUser = this.props.user;
		const setting = this.props.exercises[key].setting;
		database
			.ref('/' + currentUser.uid)
			.child('exercises')
			.child(key)
			.child('/sets')
			.push({
				completed: false,
				completedDate: Date.now(),
				setting
			});
	}

	render() {
		const { user, exercises } = this.props;
		return (
			<section>
				{map(exercises, (exercise, key) => (
					<Exercise
						handleFailed={() => this.handleFailed(key)}
						key={key}
						{...exercise}
						user={user}
					/>
				))}
			</section>
		);
	}
}
