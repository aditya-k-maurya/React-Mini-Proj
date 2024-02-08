import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	const increase = () => {
		if (count < 20) {
			setCount(count + 1);
		}
	};
	const decrease = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<div className="h-[80vh] py-12 mx-auto text-center bg-gray-800">
			<h1 className="font-bold text-4xl text-white mb-4 ">Counter</h1>
			<p className="text-white font-semibold text-2xl mb-6">
				count value: {count}
			</p>
			<button
				className="bg-gray-300 px-6 py-2 rounded-lg font-semibold text-xl mr-6"
				onClick={increase}
			>
				Increment
			</button>
			<button
				className="bg-gray-300 px-6 py-2 rounded-lg font-semibold text-xl"
				onClick={decrease}
			>
				Decrement
			</button>
		</div>
	);
}

export default Counter;
