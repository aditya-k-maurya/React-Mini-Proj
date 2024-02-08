import React from "react";
import ProjBox from "../components/ProjBox";
import mini from "../assets/data/mini";
import Home2 from "./Home2";

function Home() {
	return (
		<div className="bg-black min-h-screen m-auto p-6">
			<div className="proj-container py-12 max-w-screen-xl mx-auto">
				<h1 className="text-gray-300 text-4xl font-bold pb-3">
					My mini react projects
				</h1>
				<p className="text-gray-300 pb-8">
					This project only contain my small mini porjects that are made for fun
					purposes.
				</p>
				<div className=" flex justify-center gap-8 flex-wrap">
					{mini.map((miniProj) => (
						<div key={miniProj.key}>
							<ProjBox mini={miniProj} />
						</div>
					))}
				</div>
      </div>
      <Home2 />
		</div>
	);
}

export default Home;
