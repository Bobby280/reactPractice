const todo = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return {
				id: action.id,
				text: action.text,
				compeleted: action.compeleted,
			};
		case "TOGGLE_TODO":
			if (state.id !== action.id) {
				return state;
			} else {
				return { ...state, compeleted: !state.compeleted };
			}

		default:
			return state;
	}
};

export default todo;
