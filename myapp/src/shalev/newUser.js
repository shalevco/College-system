import react, { Component } from "react";
class NewUserComp extends Component {
	constructor(props) {
		super(props);
		this.state = { users: this.props.users, nameInput: "", emailInput: "" };
	}
	render() {
		return (
			<div style={{ border: "2px solid black", width: "50%" }}>
				Name:
				<input
					type="text"
					value={this.state.nameInput}
					onChange={(e) => {
						this.setState({ nameInput: e.target.value });
					}}
				/>
				<br />
				Email:
				<input
					type="text"
					value={this.state.emailInput}
					onChange={(e) => {
						this.setState({ emailInput: e.target.value });
					}}
				/>
				<br />
				<input
					type="button"
					value="Cancel"
					onClick={() => {
						this.props.return(false);
					}}
				/>
				<input
					type="button"
					value="Add"
					onClick={() => {
						let updateUsers = this.state.users;
						updateUsers.push({
							id: this.state.users.length + 1,
							name: this.state.nameInput,
							email: this.state.emailInput,
							address: {
								city: "",
								street: "",
								zip: "",
							},
							todos: [],
							posts: [],
						});
						this.setState({ users: updateUsers });
						this.props.return(false);
					}}
				/>
			</div>
		);
	}
}
export default NewUserComp;
