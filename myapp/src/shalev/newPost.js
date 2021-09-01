import react, { Component } from "react";
class NewPostComp extends Component {
	constructor(props) {
		super(props);
		this.state = { posts: this.props.posts, titleInput: "", bodyInput: "" };
	}
	render() {
		return (
			<div style={{ border: "2px solid black" }}>
				Title:{" "}
				<input
					type="text"
					value={this.state.titleInput}
					onChange={(e) => {
						this.setState({ titleInput: e.target.value });
					}}
				/>
				<br />
				Body:{" "}
				<input
					type="text"
					value={this.state.bodyInput}
					onChange={(e) => {
						this.setState({ bodyInput: e.target.value });
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
						let updatePosts = this.state.posts;
						updatePosts.push({
							title: this.state.titleInput,
							body: this.state.bodyInput,
							id: this.state.posts.length + 1,
						});
						this.setState({ posts: updatePosts });
						this.props.return(false);
					}}
				/>
			</div>
		);
	}
}
export default NewPostComp;
