import React from "react";
import styled from "styled-components";

const Posting = styled.div`
	background-color: lightgrey;
	margin: 1px;
	padding: 15px;
	box-shadow: 10px 10px 8px #f4f4f4;
	border: 3px #c0c0c0 double;
	border-radius: 10px;
	min-height: 250px;
	box-sizing: border-box;
`;

const PostCards = ({ title, story, image_URL }) => {
	return (
		<Posting className="postCard">
			{/* {title.0 === "" ? 
			<h2>{title}</h2> 
			: <h2>{title.0}</h2>} */}

			<p>{story}</p>
			{image_URL === undefined ? (
				""
			) : (
				<img src={image_URL} alt="uploaded by user" />
			)}
		</Posting>
	);
};

export default PostCards;
