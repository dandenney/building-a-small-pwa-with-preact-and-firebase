import { h, Component } from 'preact';

export default class Exercise extends Component {
	constructor() {
		super();
	}

	render() {
		const {
			name,
			setting,
			settingType,
			handleCompleted,
			handleFailed
		} = this.props;
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
			</article>
		);
	}
}
