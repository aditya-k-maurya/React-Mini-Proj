import React, { useEffect, useState } from "react";
import "./searchImg.css";

function ImageBox({ result }) {
	const [srcLink, setSrcLink] = useState(result.urls.small);
	const [description, setDescription] = useState(result.alt_description);
	const [href, setHref] = useState(result.links.html);


	return (
		<div>
			<div className="search-results">
				<a href={href}>
					<img src={srcLink} alt={description} />
					{description}
				</a>
			</div>
		</div>
	);
}

export default ImageBox;
