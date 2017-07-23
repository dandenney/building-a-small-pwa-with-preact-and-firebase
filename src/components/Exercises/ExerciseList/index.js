import { h, Component } from 'preact';
import { auth, database } from '../../firebase';
import { filter, map } from 'lodash';
import Exercise from '../Exercise';

export default class ExerciseList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null
		};
	}

	handleCompleted(key) {
		const currentUser = this.props.user;
		const raiseAfter = this.props.exercises[key].raiseAfter;
		const raiseBy = this.props.exercises[key].raiseBy;
		const setting = this.props.exercises[key].setting;
		const completedCount = filter(this.props.exercises[key].sets, {
			setting,
			completed: true
		}).length;

		if (completedCount < raiseAfter - 1) {
			database
				.ref('/' + currentUser.uid)
				.child('exercises')
				.child(key)
				.child('/sets')
				.push({
					completed: true,
					completedDate: Date.now(),
					setting
				});
		}
		else {
			const newSetting = checkForDecimal();

			function checkForDecimal() {
				if (raiseBy.indexOf('.') === -1) {
					return Number(setting) + Number(raiseBy);
				}
				return (Number(setting) + Number(raiseBy)).toFixed(1);
			}

			database
				.ref('/' + currentUser.uid)
				.child('exercises')
				.child(key)
				.child('/sets')
				.push({
					completed: true,
					completedDate: Date.now(),
					setting
				});
			database
				.ref('/' + currentUser.uid)
				.child('exercises')
				.child(key)
				.update({ setting: newSetting });
		}
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
						handleCompleted={() => this.handleCompleted(key)}
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
