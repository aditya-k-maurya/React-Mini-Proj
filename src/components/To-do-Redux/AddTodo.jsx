import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../feature/todo/todoSlice";

function AddTodo() {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	const addTodoHandler = (e) => {
		e.preventDefault();

		//dispatch uses reducer to make changes in the store
		dispatch(addTodo(input));
		setInput("");
	};

	return (
		<form
			onSubmit={addTodoHandler}
			className="inline-block m-auto ml-[50%] translate-x-[-50%] mb-10 pt-12"
		>
			<input
				type="text"
				className="bg-gray-800 w-[300px] rounded border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				placeholder="Enter a Todo..."
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				type="submit"
				className="text-white ml-4 bg-orange-800 border-0 py-2 px-6 focus:outline-none hover:bg-orange-900 rounded-xl text-lg"
			>
				Add Todo
			</button>
		</form>
	);
}

export default AddTodo;
