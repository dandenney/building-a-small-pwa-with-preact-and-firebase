import { h, Component } from 'preact';
import { filter, map } from 'lodash';
import style from './style';

export default class Exercise extends Component {
	constructor() {
		super();
	}

	render() {
		const {
			name,
			setting,
			settingType,
			sets,
			handleCompleted,
			handleFailed
		} = this.props;
		const filters = filter(sets, {
			setting,
			completed: true
		});

		return (
			<article class={style.exercise}>
				<h3>
					{name}
				</h3>
				<p class={style.setting}>
					<div class={style.settingText}>{setting}</div> {settingType}
				</p>
				<div class={style.buttons}>
					<button
						class={(style.button, style.buttonFailed)}
						onClick={handleFailed}
						setting={setting}
					>
						<img src="/assets/icons/bold-remove.svg" width="20" />
					</button>
					<button
						class={style.buttonCompleted}
						onClick={handleCompleted}
						setting={setting}
					>
						<img src="/assets/icons/check-simple.svg" width="30" />
					</button>
				</div>
				<ul class={style.completedList}>
					{sets &&
												map(filters, (filter, key) => (
													<li class={style.completed} key={key} />
												))}
				</ul>
			</article>
		);
	}
}
