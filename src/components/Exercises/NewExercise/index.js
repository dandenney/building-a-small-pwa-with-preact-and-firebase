import { h, Component } from 'preact';

export default class NewExercise extends Component {
	constructor() {
		super();

		this.state = {
			name: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		const name = this.state;
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
				</form>
			</section>
		);
	}
}
