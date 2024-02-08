import React, { useCallback, useEffect, useState, useRef } from "react";

const PasswordGenerator = () => {
	const [length, setLength] = useState(20);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [charAllowed, setCharAllowed] = useState(false);
	const [password, setPassword] = useState("");

	const passwordGen = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		if (numberAllowed) str += "0123456789";
		if (charAllowed) str += "!@#$%^&*()_+=-[]{}~`";

		for (let i = 0; i < length; i++) {
			pass += str[Math.floor(Math.random() * str.length)];
		}

		setPassword(pass);
	}, [length, numberAllowed, charAllowed, setPassword]);

	useEffect(() => {
		passwordGen();
	}, [length, numberAllowed, charAllowed, passwordGen]);

	//useRef hook
	const passwordRef = useRef(null);

	const copyPasswordToClipboard = useCallback(() => {
		passwordRef.current?.select();
		window.navigator.clipboard.writeText(password);
	}, [password]);

	return (
		<div className="bg-slate-800 text-gray-100 h-[80vh] m-auto text-center items-center">
			<h1 className="text-4xl mb-8 pt-8">Password generator</h1>
			<div className="m-auto ">
				<div className="flex m-auto ">
					<input
						type="text"
						value={password}
						className="py-1 px-3 w-[300px] text-gray-800 rounded-lg"
						placeholder="Password"
						readOnly
						ref={passwordRef}
					></input>

					<button
						className="h-fit align-bottom bg-blue-600"
						onClick={copyPasswordToClipboard}
					>
						Copy
					</button>
				</div>

				<div className="flex gap-4 mt-4">
					<input
						type="range"
						min={4}
						max={50}
						value={length}
						name="Length"
						id=""
						className="cursor-pointer"
						onChange={(e) => {
							setLength(e.target.value);
						}}
					/>
					<p>Length: {length}</p>
					<input
						type="checkbox"
						name="numbers"
						defaultChecked={numberAllowed}
						onChange={() => {
							setNumberAllowed((prev) => !prev);
						}}
					/>
					<label htmlFor="numbers">Numbers</label>
					<input
						type="checkbox"
						name="characters"
						defaultChecked={charAllowed}
						onChange={() => {
							setCharAllowed((prev) => !prev);
						}}
					></input>
					<label htmlFor="characters">Characters</label>
				</div>
			</div>
		</div>
	);
};

export default PasswordGenerator;
