import React from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { Provider } from "react-redux";
import { store } from "../../app/store";

function ReduxTodo() {
	return (
		<Provider store={store}>
			<div className="min-h-screen p-4 bg-gray-300">
				<AddTodo />
				<Todos />
			</div>
		</Provider>
	);
}

export default ReduxTodo;
