import { h, Component } from 'preact';
import { database } from '../../firebase';

export default class NewExercise extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			setting: '',
			settingType: '',
			reps: '',
			raiseAfter: '',
			raiseBy: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		const {
			name,
			setting,
			settingType,
			raiseAfter,
			raiseBy,
			reps
		} = this.state;

		return (
			<section>
				<h2>New Exercise</h2>

				<form>
					<div>
						<label for="name">Name</label>
						<input
							type="text"
							name="name"
							onChange={this.handleChange}
							placeholder="Chest Press"
							value={this.state.name}
						/>
					</div>
					<div>
						<div>
							<label for="setting">Initial Setting</label>
							<input
								type="number"
								name="setting"
								onChange={this.handleChange}
								placeholder="85"
								value={this.state.setting}
							/>
						</div>
						<div>
							<label for="settingType">Setting Type</label>
							<input
								type="text"
								name="settingType"
								onChange={this.handleChange}
								placeholder="lbs"
								value={this.state.settingType}
							/>
						</div>
					</div>
					<div>
						<label for="reps">Reps</label>
						<input
							type="number"
							name="reps"
							onChange={this.handleChange}
							placeholder="5"
							value={this.state.reps}
						/>
					</div>
					<div>
						<div>
							<label for="raiseAfter">Raise After (Sets)</label>
							<input
								type="number"
								name="raiseAfter"
								onChange={this.handleChange}
								placeholder="6"
								value={this.state.raiseAfter}
							/>
						</div>
						<div>
							<label for="raiseBy">Raise By (Type)</label>
							<input
								type="number"
								name="raiseBy"
								onChange={this.handleChange}
								placeholder="5"
								value={this.state.raiseBy}
							/>
						</div>
					</div>
				</form>
			</section>
		);
	}
}
