import react, { Component } from "react";
class OtherDataComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: this.props.user,
			streetInput: this.props.user.address.street,
			cityInput: this.props.user.address.city,
			zipInput: this.props.user.address.zip,
		};
	}
	componentDidUpdate(prevprops, prevstate) {
		// userCard.js מעביר את האינפוטים ל
		let otherDataToUpdate = {
			street: this.state.streetInput,
			city: this.state.cityInput,
			zip: this.state.zipInput,
		};

		if (
			prevstate.streetInput != this.state.streetInput ||
			prevstate.cityInput != this.state.cityInput ||
			prevstate.zipInput != this.state.zipInput
		) {
			this.props.otherDataUpdated(otherDataToUpdate);
		}
	}
	render() {
		return (
			<div style={{ border: "2px solid black", width: "50%" }}>
				Street:{" "}
				<input
					type="text"
					value={this.state.streetInput}
					onChange={(e) => {
						this.setState({ streetInput: e.target.value });
					}}
				/>
				<br />
				City:{" "}
				<input
					type="text"
					value={this.state.cityInput}
					onChange={(e) => {
						this.setState({ cityInput: e.target.value });
					}}
				/>
				<br />
				Zip:{" "}
				<input
					type="text"
					value={this.state.zipInput}
					onChange={(e) => {
						this.setState({ zipInput: e.target.value });
					}}
				/>
			</div>
		);
	}
}
export default OtherDataComp;
