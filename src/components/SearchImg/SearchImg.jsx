import React, { useEffect, useState } from "react";
import "./searchImg.css";
import ImageBox from "./ImageBox";

const data = [
	{
		id: "1",
		description: "Beautiful Mountain",
		urls: {
			small:
				"https://images.unsplash.com/photo-1677817019038-3d886d17387c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
		},
		links: {
			html: "https://images.unsplash.com/photo-1677817019038-3d886d17387c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
		},
	},
	{
		id: "2",
		description: "Beautiful Parrot",
		urls: {
			small:
				"https://images.unsplash.com/photo-1690441426989-0cf9f866a6f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
		},
		links: {
			html: "https://images.unsplash.com/photo-1690441426989-0cf9f866a6f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
		},
	},
	{
		id: "3",
		description: "Beautiful Waterfall",
		urls: {
			small:
				"https://images.unsplash.com/photo-1690039059538-7c08716f6623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
		},
		links: {
			html: "https://images.unsplash.com/photo-1690039059538-7c08716f6623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
		},
	},
	{
		id: "4",
		description: "Sunflower field",
		urls: {
			small:
				"https://images.unsplash.com/photo-1690277432114-00052fe7435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
		},
		links: {
			html: "https://images.unsplash.com/photo-1690277432114-00052fe7435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
		},
	},
	{
		id: "5",
		description: "Flower",
		urls: {
			small:
				"https://images.unsplash.com/photo-1690367044199-d39c60785e5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
		},
		links: {
			html: "https://images.unsplash.com/photo-1690367044199-d39c60785e5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
		},
	},
	{
		id: "6",
		description: "Waterfall",
		urls: {
			small:
				"https://plus.unsplash.com/premium_photo-1690164161383-f5ff30a790bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80",
		},
		links: {
			html: "https://plus.unsplash.com/premium_photo-1690164161383-f5ff30a790bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80",
		},
	},
];

function SearchImg() {
  const [results, setResult] = useState(data);
  const [search, setSearch] = useState();

  function handleClick() {
    
  }

	return (
		<div className="image-container bg-gray-700 text-white">
			<h1>Image Search App</h1>
			<form action="" className=" gap-5 mb-12 mt-4 ">
				<input type="text" id="search-input" placeholder="Search for images" value={search} />
				<button id="search-button" onClick={handleClick}>Search</button>
			</form>

			<div className="search-result">
				{results.map((result) => (
          <div className="" id={result.id}>
            <ImageBox result={result} />
          </div>
				))}
			</div>

			<button id="show-more-button">Show More -</button>
		</div>
	);
}

export default SearchImg;
