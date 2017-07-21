import { h, Component } from 'preact';
import { auth, googleAuthProvider } from '../firebase';

export default class SignIn extends Component {
	render() {
		return (
			<section>
				<h1>Raisercise</h1>
				<button onClick={() => auth.signInWithRedirect(googleAuthProvider)}>
          Sign In
				</button>
			</section>
		);
	}
}
