import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

import store from "../store";


let AddTodo = () => {
	let input;
	return (
		<>
			<input
				ref={(node) => {
					input = node;
				}}
			/>
			<button
				onClick={() => {
					store.dispatch(addTodo(input.value));
					input.value = "";
				}}
			>
				ADD_TODO
			</button>
		</>
	);
};
AddTodo = connect()(AddTodo);

export default AddTodo;
