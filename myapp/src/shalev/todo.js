import react, { Component } from "react";
class TodoComp extends Component {
	constructor(props) {
		super(props);
		this.state = { todo: this.props.todo };
	}
	render() {
		let completed = "";
		if (this.state.todo.completed === true) {
			completed = "true";
		} else {
			completed = "false";
		}

		let buttonMarkCompletedToRender = "";
		if (completed === "false") {
			buttonMarkCompletedToRender = (
				<input
					type="button"
					value="Mark Completed"
					onClick={() => {
						completed = "true";
						let updateTodo = this.state.todo;
						updateTodo.completed = true;
						this.setState({ todo: updateTodo });
					}}
				/>
			);
		}
		return (
			<div style={{ border: "2px solid black", width: "80%" }}>
				Title: {this.state.todo.title}
				<br />
				Completed: {completed}
				<br />
				{buttonMarkCompletedToRender}
			</div>
		);
	}
}
export default TodoComp;
