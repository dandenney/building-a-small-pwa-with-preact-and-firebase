import { h, Component } from 'preact';
import Exercises from '../../components/Exercises';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Exercises />
			</div>
		);
	}
}
