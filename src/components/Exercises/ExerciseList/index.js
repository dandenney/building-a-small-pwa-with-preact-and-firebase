import { h, Component } from 'preact';
import { auth } from '../../firebase';
import { map } from 'lodash';

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
				{map(exercises, (exercise, key) => <article>{exercise.name}</article>)}
			</section>
		);
	}
}
