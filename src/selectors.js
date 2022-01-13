const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case "all":
			return todos;
		case "active":
			return todos.filter((todo) => !todo.compeleted);
		case "compeleted":
			return todos.filter((todo) => todo.compeleted);
		default:
			return todos;
	}
};

export {getVisibleTodos}