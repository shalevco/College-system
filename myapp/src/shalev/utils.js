import axios from "axios";

const getAll = (url) => {
	return axios.get(url);
};
// users.js שימוש בפונקציה ב
const getShapedData = async () => {
	// data מקבל את כל
	let usersData = await getAll("https://jsonplaceholder.typicode.com/users");
	let todosData = await getAll("https://jsonplaceholder.typicode.com/todos");
	let postsData = await getAll("https://jsonplaceholder.typicode.com/posts");
	// data מעצב את ה
	let users = usersData.data.map(
		(user) =>
			(user = {
				id: user.id,
				name: user.name,
				email: user.email,
				address: {
					city: user.address.city,
					street: user.address.street,
					zip: user.address.zipcode,
				},
				todos: [],
				posts: [],
			})
	);

	//user לכל posts and todos מכניס
	users.forEach((user) => {
		todosData.data.forEach((todo) => {
			if (todo.userId === user.id) {
				user.todos.push({
					id: todo.id,
					title: todo.title,
					completed: todo.completed,
				});
			}
		});
		postsData.data.forEach((post) => {
			if (post.userId === user.id) {
				user.posts.push({ id: post.id, title: post.title, body: post.body });
			}
		});
	});

	return users;
};

// users.js שימוש בפונקציה ב
const updateUser = (usersArr, userToUpdate) => {
	let index = usersArr.findIndex((user) => {
		return user.id === userToUpdate.id;
	});
	let updatedUsersArr = usersArr;
	updatedUsersArr[index] = userToUpdate;
	return updatedUsersArr;
};

// users.js שימוש בפונקציה ב
const deleteUser = (usersArr, userToDelete) => {
	let index = usersArr.findIndex((user) => {
		return user.id === userToDelete.id;
	});
	let usersArrWithoutUserToDelete = usersArr;
	usersArrWithoutUserToDelete.splice(index, 1);
	return usersArrWithoutUserToDelete;
};
export default {
	getShapedData,
	getAll,
	updateUser,
	deleteUser,
};
