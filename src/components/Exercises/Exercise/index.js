import { h, Component } from 'preact';
import { filter, map } from 'lodash';

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
			<article>
				<h3>
					{name}
				</h3>
				<p>
					<div>{setting}</div> {settingType}
				</p>
				<p>
					<button onClick={handleFailed} setting={setting}>
            Fail
					</button>
					<button onClick={handleCompleted} setting={setting}>
            Complete
					</button>
				</p>
				<ul>
					{sets && map(filters, (filter, key) => <li key={key}>{key}</li>)}
				</ul>
			</article>
		);
	}
}
