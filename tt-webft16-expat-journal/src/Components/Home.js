import React, { useEffect, useState } from "react";
import PostCards from "./postCards";
import UpdatePosts from "./updatePosts";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../Actions/postActions";
import { axiosWithAuth } from "../Utils/axiosWithAuth";
import img from "../Assets/lady1.jpg";

//Styles

const CardGrid = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 15px;
`;

// InitialState & Dummydata

const initialState = [
	{
		id: 1,
		title: "Post Title 1",
		story: "Story text goes here.",
		image_URL: img,
	},
];

const Home = () => {
	const posts = useSelector((state) => state.postReducer.posts);
	const dispatch = useDispatch();
	const [post, setPost] = useState(initialState);
	const [newPost, setNewPost] = useState(initialState);

	const addPost = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.get("api/posts")
			.then((res) => {
				setPost(res.data);
			})
			.catch((err) => {
				console.log("error --> ", err);
			});
		console.log(post);
	};

	const handleChanges = (e) => {
		setNewPost({
			title: e.target.value,
			story: e.target.value,
			image_URL: e.target.value,
			id: Date.now(),
		});
	};

	const updatePosts = (e) => {
		e.preventDefault();
		dispatch(addPost(newPost));
		post.push(posts);
		console.log(post);
	};

	return (
		<div>
			<CardGrid>
				{post.map((item) => {
					return (
						<div>
							<PostCards
								key={item.id}
								title={item.title}
								story={item.story}
								image_URL={item.image_URL}
							/>
							<UpdatePosts post={post} updatePost={setPost} />
						</div>
					);
				})}
			</CardGrid>
			<div>
				<button>Add a New Post</button>
			</div>
		</div>
	);
};

export default Home;
