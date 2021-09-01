import react, { Component } from "react";
import OtherDataComp from "./otherDataComp";
import TodosComp from "./todos";
import PostsComp from "./posts";

class UserCardComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: this.props.user,
			isShowingOtherData: false,
			isIdClicked: false,
			nameInput: this.props.user.name,
			emailInput: this.props.user.email,
			otherDataToUpdate: {},
		};
	}

	updateFun = () => {
		let updateUser = this.state.user;
		updateUser.name = this.state.nameInput;
		updateUser.email = this.state.emailInput;
		updateUser.address.street = this.state.otherDataToUpdate.street;
		updateUser.address.city = this.state.otherDataToUpdate.city;
		updateUser.address.zip = this.state.otherDataToUpdate.zip;
		//users.js שולח ל
		this.props.userUpdated(updateUser);
	};

	deleteFun = () => {
		let userToDelete = this.state.user;
		//users.js שולח ל
		this.props.deleteUser(userToDelete);
	};

	render() {
		let borderColor = this.state.user.todos.some(
			(todo) => todo.completed === false
		)
			? "2px solid red"
			: "2px solid green";

		//other data קומפוננטת
		let otherDataToRender = "";
		if (this.state.isShowingOtherData === true) {
			otherDataToRender = (
				<OtherDataComp
					user={this.state.user}
					otherDataUpdated={(data) => {
						this.setState({ otherDataToUpdate: data });
					}}
				/>
			);
		}

		// isIdClicked פועל לפי המצב של
		let backgroundColor = "";
		let todosToRender = "";
		let postsToRender = "";
		if (this.state.isIdClicked === true) {
			backgroundColor = "orange";

			// //todos קומפוננטת
			todosToRender = (
				<TodosComp todos={this.state.user.todos} userId={this.state.user.id} />
			);

			// //posts קומפוננטת
			postsToRender = (
				<PostsComp posts={this.state.user.posts} userId={this.state.user.id} />
			);
		}
		return (
			<div
				style={{
					border: borderColor,
					backgroundColor: backgroundColor,
					width: "50%",
				}}
			>
				<div
					onClick={() => {
						this.setState({ isIdClicked: !this.state.isIdClicked });
					}}
				>
					Id: {this.state.user.id}
				</div>
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
				<input type="button" value="Delete" onClick={this.deleteFun} />
				<br />
				<input type="button" value="Update" onClick={this.updateFun} />
				<br />
				<input
					type="button"
					value="Other Data"
					onMouseOver={() => {
						this.setState({ isShowingOtherData: true });
					}}
					onClick={() => {
						this.setState({ isShowingOtherData: false });
					}}
				/>
				<br />
				{otherDataToRender}
				<br />
				{todosToRender}
				<br />
				{postsToRender}
			</div>
		);
	}
}
export default UserCardComp;
