import React from "react";
const Todo = ({ todo, onTodoClick }) => {
	return (
		<li
			onClick={onTodoClick}
			style={{
				textDecoration: todo.compeleted ? "line-through" : "none",
			}}
		>
			{todo.text}
		</li>
	);
};

export default Todo;
