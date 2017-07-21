import { h, Component } from 'preact';
import { auth, database } from '../firebase';
import SignIn from '../SignIn';

export default class Exercises extends Component {
	render() {
		return (
			<section>
				<SignIn />
			</section>
		);
	}
}
