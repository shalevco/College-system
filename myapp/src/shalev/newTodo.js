import react, { Component } from "react";
class NewTodoComp extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: this.props.todos, input: "" };
	}
	render() {
		return (
			<div style={{ border: "2px solid black" }}>
				Title:
				<input
					type="text"
					value={this.state.input}
					onChange={(e) => {
						this.setState({ input: e.target.value });
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
						let updateTodos = this.state.todos;
						updateTodos.push({
							title: this.state.input,
							id: this.state.todos.length + 1,
							completed: false,
						});
						this.setState({ todos: updateTodos });
						this.props.return(false);
					}}
				/>
			</div>
		);
	}
}
export default NewTodoComp;
