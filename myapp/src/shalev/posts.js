import react, { Component } from "react";
import PostComp from "./post";
import NewPostComp from "./newPost";
class PostsComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: this.props.posts,
			userId: this.props.userId,
			isNewPost: false,
		};
	}
	render() {
		let newPostToRender = "";
		if (this.state.isNewPost === true) {
			newPostToRender = (
				<NewPostComp
					posts={this.state.posts}
					return={(data) => {
						this.setState({ isNewPost: data });
					}}
				/>
			);
		}

		let postToRender = this.state.posts.map((post) => {
			return <PostComp key={post.id} post={post} />;
		});
		return (
			<div style={{ border: "2px solid black" }}>
				<h4>
					Posts - user:{this.state.userId}
					<input
						type="button"
						value="Add"
						onClick={() => {
							this.setState({ isNewPost: true });
						}}
					/>
				</h4>
				{newPostToRender}
				<br />
				{postToRender}
			</div>
		);
	}
}
export default PostsComp;
