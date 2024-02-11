import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	todos: [
		{
			id: 1,
			text: "hello",
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
			const todo = {
				id: nanoid(), // gives unique id to each element
				text: action.payload, // action.payload gives will store the value
			};

			//we push the newly created todo in the todos
			state.todos.push(todo);
    },
    
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
    },
	},
});

//exporting reducer to get direct access of the method in component
export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer
