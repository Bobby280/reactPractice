import React from "react";
import Todo from "../component/Todo";

const TodoList = ({ visibleTodos, onTodoClick }) => {
	
	return (
		<ul>
			{visibleTodos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					onTodoClick={() => onTodoClick(todo.id)}
				/>
			))}
		</ul>
	);
};
export default TodoList;
