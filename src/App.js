import React from "react";
import Addtodo from "./component/AddTodo";
import VisibleTodoList from "./container/VisibleTodoList";
import Footer from "./container/Footer";

const App = () => {

	return (
		<div>
			<Addtodo />
			<VisibleTodoList  />
			<Footer />
		</div>
	);
};

export default App;
