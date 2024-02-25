import React from "react";
import ProjBox from "../components/ProjBox";
import mini from "../assets/data/mini";

function Home() {
	return (
		<div className="bg-black min-h-screen m-auto p-6">
			<div className="proj-container py-12 max-w-[1240px] mx-auto">
				<h1 className="text-gray-300 text-4xl font-bold pb-3">
					React projects
				</h1>
				<p className="text-gray-300 pb-8">
					This project only contain my small mini porjects that are made to
					build strong foundation on react.
				</p>
				<div className=" flex justify-around gap-8 gap-y-12 flex-wrap pb-12">
					{mini.map((miniProj) => (
						<div key={miniProj.key}>
							<ProjBox mini={miniProj} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;
