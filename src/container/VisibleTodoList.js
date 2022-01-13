import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { toggleTodo } from "../actions";
import { getVisibleTodos } from "../selectors";
import TodoList from "./TodoList";

const mapTodoListClickToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id));
		},
	};
};
const mapTodoListVisibleTodosToProps = (state, ownProps) => {
	const filter = ownProps.match.params.filter;
	console.log(state)
	return {
		visibleTodos: getVisibleTodos(state.todos, filter || "all"),
	};
};
const VisibleTodoList = withRouter(
	connect(mapTodoListVisibleTodosToProps, mapTodoListClickToProps)(TodoList)
);

export default VisibleTodoList;
