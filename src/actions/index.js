import {v4} from "node-uuid"

const setVisibilityFilter = (filter) => ({
	type: "SET_VISIBILITY_FILTER",
	filter,
});
const addTodo = (InputValue) => ({
	type: "ADD_TODO",
	id: v4(),
	text: InputValue,
	compeleted: false,
});
const toggleTodo = (id) => ({
	type: "TOGGLE_TODO",
	id: id,
});

export { setVisibilityFilter, addTodo, toggleTodo };
