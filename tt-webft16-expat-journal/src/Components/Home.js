import React, { useState, useEffect } from "react";
import PostCards from "./postCards";
import Dashboard from "./Dashboard";
// import { dummyData } from "../Constants/dummyData";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

//Styles

const CardGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 15px;
`;

const PostCard = styled.div`
	display: flex;
	margin-bottom: 2%;
`;

// InitialState & Dummydata

const Home = () => {
	const [post, setPost] = useState([]);
	// const [readPost, setReadPost] = useState(dummyData);

	// console.log("There are the current posts -->", post);

	const getPost = () => {
		axiosWithAuth()
			.get("api/posts")
			.then((res) => {
				setPost(res.data);
			})
			.catch((err) => {
				console.log("error --> ", err);
			});
	};

	useEffect(() => {
		getPost();
	}, []);

	// const handleChanges = (e) => {
	// 	setNewPost({
	// 		...newPost,
	// 		title: e.target.value,
	// 		story: e.target.value,
	// 		image_URL: e.target.value,
	// 		id: Date.now(),
	// 	});
	// };

	// const updatePosts = (e) => {
	// 	e.preventDefault();
	// 	dispatch(addPost(newPost));
	// 	post.push(posts);
	// 	// console.log(post);
	// };

	return (
		<div>
			<CardGrid>
				<h2>Travelling Memories</h2>
				<PostCard>
					{post.map((item) => {
						return (
							<div key={uuidv4()}>
								<PostCards
									key={item.id}
									title={item.title}
									story={item.story}
									image_URL={item.image_URL}
								/>
								{/* <button onClick={getPost()}>Refresh</button> */}
							</div>
						);
					})}
				</PostCard>
			</CardGrid>
			<Dashboard post={post} updatePost={setPost} />
		</div>
	);
};

export default Home;
