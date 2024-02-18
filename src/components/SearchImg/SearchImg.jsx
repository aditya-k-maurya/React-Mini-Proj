import React, { useEffect, useState } from "react";
import "./searchImg.css";
import ImageBox from "./ImageBox";
import data from "../../assets/data/unsplash";

const accessKey = "-J0diOSsGWv13hNxIcSyp6U1JNoBFdcR1SKdXiJ3nqg";
let page = 1;

function SearchImg() {
	const [results, setResult] = useState(data);
	const [search, setSearch] = useState("");

	async function handleClick(event) {
		event.preventDefault();

		try {
			const url = `https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=${accessKey}`;
			const response = await fetch(url);
			const responseData = await response.json();
			setResult(responseData.results);
			console.log(responseData);
		} catch (error) {
			console.log(error);
		}

		setSearch("");

		page++;

		if (page > 1) {
			let showMore = document.getElementById("show-more-button");
			showMore.style.display = "block";
		}
	}

	return (
		<div className="image-container bg-gray-700 text-white">
			<h1>Image Search App</h1>
			<form action="" className=" gap-5 mb-12 mt-4 ">
				<input
					type="text"
					id="search-input"
					placeholder="Search for images"
					value={search}
					onChange={(e) => setSearch(e.target.value)} // Add this line
				/>
				<button id="search-button" onClick={handleClick}>
					Search
				</button>
			</form>

			<div className="search-result">
				{Array.isArray(results) &&
					results.map((result) => (
						<div className="result-container" key={result.id}>
							<ImageBox result={result} />
						</div>
					))}
			</div>

      <button id="show-more-button">Show More...</button>
      
		</div>
	);
}

export default SearchImg;
