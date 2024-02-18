import React from "react";
import { Link } from "react-router-dom";

function ProjBox({ mini }) {
	const { title, description, image, path } = mini;

	return (
		<div className="w-80 h-auto bg-neutral-100 rounded-lg text-neutral-800 p-4 flex flex-col items-start justify-between gap-3 hover:bg-nural-200 hover:shadow-2xl hover:shadow-orange-400 transition-shadow">
			<div className="w-[100%] mt-4">
				<img
					className="w-[100%]  rounded-lg"
					style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
					src={image}
					alt=""
				/>
			</div>
			<div className="">
				<p className="font-bold text-2xl mt-4 text-orange-900 mb-4">{title}</p>
				<p className="mb-4 font-semibold">{description}</p>
			</div>

			<Link to={path}>
				<button className="bg-orange-800 text-white font-bold p-2 px-6 rounded-xl mb-4 hover:bg-orange-700 transition-colors">
					Let's go
				</button>
			</Link>
		</div>
	);
}

export default ProjBox;
