import react, { Component } from "react";
import TodoComp from "./todo";
import NewTodoComp from "./newTodo";
class TodosComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: this.props.todos,
			userId: this.props.userId,
			isNewTodo: false,
		};
	}

	render() {
		let newTodoToRender = "";
		if (this.state.isNewTodo === true) {
			newTodoToRender = (
				<NewTodoComp
					todos={this.state.todos}
					return={(data) => {
						this.setState({ isNewTodo: data });
					}}
				/>
			);
		}

		let todoToRender = this.state.todos.map((todo) => {
			return <TodoComp key={todo.id} todo={todo} />;
		});
		return (
			<div style={{ border: "2px solid black", width: "80%" }}>
				<h4>
					Todos - User:{this.state.userId}
					<input
						type="button"
						value="Add"
						onClick={() => {
							this.setState({ isNewTodo: true });
						}}
					/>
				</h4>
				{newTodoToRender}
				<br />
				{todoToRender}
			</div>
		);
	}
}
export default TodosComp;
