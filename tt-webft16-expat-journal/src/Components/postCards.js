import React from "react";
import styled from "styled-components";

const Posting = styled.div`
	border-radius: 10px;
	min-height: 250px;
	box-sizing: border-box;
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
