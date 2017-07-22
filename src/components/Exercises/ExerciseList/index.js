import { h, Component } from 'preact';
import { auth } from '../../firebase';
import { map } from 'lodash';
import Exercise from '../Exercise';

export default class ExerciseList extends Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	render() {
		const { user, exercises } = this.props;
		return (
			<section>
				{map(exercises, (exercise, key) => (
					<Exercise key={key} {...exercise} user={user} />
				))}
			</section>
		);
	}
}
