import React from "react";
import styled from "styled-components";

const Posting = styled.div`
	background-color: lightgrey;
	margin: 1px;
	padding: 15px;
	box-shadow: 10px 10px 8px #f4f4f4;
	border: 3px #c0c0c0 double;
	border-radius: 10px;
	height: 250px;
`;

const PostCards = ({ title, story, image_URL }) => {
	return (
		<Posting className="postCard">
			<h2>{title}</h2>
			<p>{story}</p>
			{image_URL === "" ? "" : <img src={image_URL} alt="uploaded by user" />}
		</Posting>
	);
};

export default PostCards;
