import { h, Component } from 'preact';
import { auth } from '../firebase';
import style from './style';

export default class CurrentUser extends Component {
	constructor() {
		super();
	}

	render() {
		const user = this.props.user;
		return (
			<article class={style.currentUser}>
				<img
					alt={user.displayName}
					class={style.avatar}
					src={user.photoURL}
					width="40"
				/>
				<button class={style.button} onClick={() => auth.signOut()}>
          Sign Out
				</button>
			</article>
		);
	}
}
