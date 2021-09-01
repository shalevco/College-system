import react, { Component } from "react";
import UserCardComp from "./userCard";
import utils from "./utils";
import NewUserComp from "./newUser";

class UsersComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			searchInput: "",
			updateUser: {},
			userToDelete: {},
			isNewUser: false,
		};
	}

	//  פונקציה שנטענת אוטומטית אחרי הרנדור הראשוני
	async componentDidMount() {
		let shapedData = await utils.getShapedData();
		this.setState({ users: shapedData });
	}

	//  פונקציה שנטענת אוטומטית אחרי כל רנדור
	componentDidUpdate(prevProps, prevState) {
		//utils.js מ updateUser שימוש בפונקציה
		//השתנה updateUser בתנאי ש
		if (prevState.updateUser !== this.state.updateUser) {
			let updatedUsers = utils.updateUser(
				this.state.users,
				this.state.updateUser
			);
			this.setState({ users: updatedUsers });
		}

		//utils.js מ deleteUser שימוש בפונקציה
		//השתנה userToDelete בתנאי ש
		if (prevState.userToDelete !== this.state.userToDelete) {
			let usersArrWithoutUserToDelete = utils.deleteUser(
				this.state.users,
				this.state.userToDelete
			);
			this.setState({ users: usersArrWithoutUserToDelete });
		}
	}

	render() {
		let newUserToRender = "";
		if (this.state.isNewUser === true) {
			newUserToRender = (
				<NewUserComp
					users={this.state.users}
					return={(data) => {
						this.setState({ isNewUser: data });
					}}
				/>
			);
		}

		let usersToRender = this.state.users.map((user) => {
			let name = user.name;
			let email = user.email;
			let input = this.state.searchInput;
			name = name.toLowerCase();
			email = email.toLowerCase();
			input = input.toLowerCase();
			if (name.includes(input) || email.includes(input)) {
				return (
					<UserCardComp
						//userCard.js שולח ל
						key={user.id}
						user={user}
						//userCard.js מקבל מ
						userUpdated={(data) => {
							this.setState({ updateUser: data });
						}}
						deleteUser={(data) => {
							this.setState({ userToDelete: data });
						}}
					/>
				);
			}
		});

		return (
			<div style={{ border: "2px solid black", textAlign: "left" }}>
				Search:{" "}
				<input
					taype="text"
					onChange={(e) => {
						this.setState({ searchInput: e.target.value });
					}}
				/>
				<input
					type="button"
					value="Add User"
					onClick={() => {
						this.setState({ isNewUser: true });
					}}
				/>
				<br />
				<br />
				{newUserToRender}
				<br />
				{usersToRender}
			</div>
		);
	}
}
export default UsersComp;
