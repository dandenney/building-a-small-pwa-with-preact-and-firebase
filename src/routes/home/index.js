import { h, Component } from 'preact';
import ExercisesList from '../../components/ExercisesList';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<ExercisesList />
			</div>
		);
	}
}
