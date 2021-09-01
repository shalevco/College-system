import React, { Component } from "react";
import "./App.css";
import UsersComp from "./shalev/users";

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="App">
				<UsersComp />
			</div>
		);
	}
}

export default App;
