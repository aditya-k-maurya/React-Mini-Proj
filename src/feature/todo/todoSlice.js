import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	todos: [
		{
			id:1,
			text: "I will do it",
			completed: false,
		},
	],
};

export const todoSlice = createSlice({
	name: "todo",

	initialState, // this can be declare here or outside the function

	// reducers contain functions
	reducers: {
		// there are two parameters in function state and action
		// state gives the access of initial state and we can manipulate it
		// action stores the value passed by user in form of payload
		addTodo: (state, action) => {
			if (action.payload === "") {
				alert("Input field can't be empty");
			} else {
				const todo = {
					id: nanoid(), // gives unique id to each element
					text: action.payload, // action.payload gives will store the value
				};

				//we push the newly created todo in the todos
				state.todos.push(todo);
			}
		},

		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},

		updateTodo: (state, action) => {
			state.todos.map((todo) => {
				if (todo.id === action.payload.id) {
					todo.text = action.payload.text;
				}
			});
		},

		toggleTodo: (state, action) => {
			const todo = state.todos.filter((todo) => todo.id === action.payload.id);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
	},
});

//exporting reducer to get direct access of the method in component
export const { toggleTodo, updateTodo, addTodo, removeTodo } =
	todoSlice.actions;

export default todoSlice.reducer;
