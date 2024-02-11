import React, { useState } from "react";

function Calculator() {
	const [input, SetInput] = useState("0");
	const [result, setResult] = useState();

	function handleClick(symbol) {
		if (input === "0") {
			SetInput("");
		}
		SetInput((prev) => (prev += symbol));
	}

	function handleResult() {
		try {
			setResult(eval(input));
		} catch (error) {
			setResult(error);
		}
	}

	function clear() {
		SetInput("0");
		setResult();
	}

	function handleDelete() {
		SetInput((prev) => prev.slice(0, -1));
	}

	return (
		<div className="bg-gray-800 min-h-screen pt-12">
			<div className="bg-slate-500 ml-[50%] translate-x-[-50%] w-[320px] ml-1/2 p-6 font-medium rounded-lg shadow-lg outline-4 outline-zinc-200 ">
				<div className="bg-black text-right h-[100px] p-3">
					<h2 className="text-gray-300 font-medium  text-lg overflow-hidden">
						{input}
					</h2>
					<h1 className="text-gray-200 text-2xl ">{result}</h1>
				</div>

				<div className="bg-gray-700 p-2 mt-4">
					<div className="flex flex-wrap justify-around gap-4 pt-4">
						<button
							className="bg-red-200 w-12 h-12 font-medium rounded-full "
							onClick={clear}
						>
							C
						</button>
						<button
							className="bg-red-200 w-12 h-12 font-medium rounded-full "
							onClick={handleDelete}
						>
							DEL
						</button>
						<button
							className="bg-red-200 w-12 h-12 font-medium rounded-full "
							onClick={() => handleClick("%")}
						>
							%
						</button>
						<button
							className="bg-yellow-200  text-2xl w-12 h-12 font-medium rounded-full "
							onClick={() => handleClick("/")}
						>
							÷
						</button>
					</div>
					<div className="flex flex-wrap justify-around gap-4 pt-4">
						<button
							className="bg-gray-200 w-12 h-12 font-medium rounded-full "
							onClick={() => handleClick("1")}
						>
							1
						</button>
						<button
							className="bg-gray-200 w-12 h-12 font-medium rounded-full "
							onClick={() => handleClick("2")}
						>
							2
						</button>
						<button
							className="bg-gray-200 w-12 h-12 font-medium rounded-full "
							onClick={() => handleClick("3")}
						>
							3
						</button>
						<button
							className="bg-yellow-200 text-2xl w-12 h-12 font-medium rounded-full "
							onClick={() => handleClick("*")}
						>
							x
						</button>
					</div>
					<div className="flex flex-wrap justify-around gap-4 pt-4">
						<button
							className="bg-gray-200 w-12 h-12 font-medium rounded-full "
							onClick={() => handleClick("4")}
						>
							4
						</button>
						<button
							className="bg-gray-200 w-12 h-12 font-medium rounded-full "
							onClick={() => handleClick("5")}
						>
							5
						</button>
						<button
							className="bg-gray-200 w-12 h-12 font-medium rounded-full "
							onClick={() => handleClick("6")}
						>
							6
						</button>
						<button
							className="bg-yellow-200 text-2xl w-12 h-12 font-medium rounded-full "
							onClick={() => handleClick("+")}
						>
							+
						</button>
					</div>
					<div className="flex flex-wrap justify-around gap-4 pt-4">
						<button
							className="bg-gray-200 w-12 h-12 font-medium rounded-full "
							onClick={() => handleClick("7")}
						>
							7
						</button>
						<button
							className="bg-gray-200 w-12 h-12 font-medium rounded-full "
							onClick={() => handleClick("8")}
						>
							8
						</button>
						<button
							className="bg-gray-200 w-12 h-12 font-medium rounded-full "
							onClick={() => handleClick("9")}
						>
							9
						</button>
						<button
							className="bg-yellow-200 w-12 text-2xl h-12 font-medium rounded-full "
							onClick={() => handleClick("-")}
						>
							-
						</button>
					</div>
					<div className="flex flex-wrap justify-around gap-4 pt-4">
						<button
							className="bg-gray-200 w-12 h-12 font-medium rounded-full "
							onClick={() => handleClick("0")}
						>
							0
						</button>
						<button
							className="bg-gray-200 w-12 h-12 font-medium text-2xl rounded-full "
							onClick={() => handleClick(".")}
						>
							.
						</button>
						<button
							className="bg-blue-400 w-28 h-12 font-medium text-2xl rounded-full "
							onClick={handleResult}
						>
							=
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
