import React from "react";
import "./searchImg.css";

function ImageBox({ result }) {
	return (
		<div>
			<div class="search-results">
				<a href={result.links.html}>
					<img src={result.urls.small} alt={result.description} />
					{result.description}
				</a>
			</div>
		</div>
	);
}

export default ImageBox;
