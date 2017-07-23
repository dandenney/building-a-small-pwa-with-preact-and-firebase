import { h, Component } from 'preact';
import { auth, googleAuthProvider } from '../firebase';
import style from './style';

export default class SignIn extends Component {
	render() {
		return (
			<div class={style.signIn}>
				<h1 class={style.h1}>Raisercise</h1>
				<button
					class={style.button}
					onClick={() => auth.signInWithRedirect(googleAuthProvider)}
				>
          Sign In
				</button>
			</div>
		);
	}
}
