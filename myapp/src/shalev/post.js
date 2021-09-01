import react, { Component } from "react";
class PostComp extends Component {
	constructor(props) {
		super(props);
		this.state = { post: this.props.post };
	}
	render() {
		return (
			<div style={{ border: "2px solid black" }}>
				Title: {this.state.post.title}
				<br />
				<br />
				Body: {this.state.post.body}
			</div>
		);
	}
}
export default PostComp;
