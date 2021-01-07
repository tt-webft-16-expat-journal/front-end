import React, { useEffect, useState } from "react";
import PostCards from "./postCards";
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

const dummyData = [
	{
		id: 1,
		title: "Post Title 1",
		story: "Story text goes here.",
		image_URL: img,
	},
];

const initialState = {
	PostTitle: "",
	PostStory: "",
	PostImage: "",
	id: 0,
};

const Home = () => {
	const posts = useSelector((state) => state.postReducer.posts);
	const dispatch = useDispatch();
	const [post, setPost] = useState([]);
	const [newPost, setNewPost] = useState(initialState);

	useEffect(() => {
		axiosWithAuth()
			.get("api/posts")
			.then((res) => {
				setPost(res.data);
			})
			.catch((err) => {
				console.log("error --> ", err);
			});
	}, []);

	useEffect(() => {
		setPost(dummyData);
	}, []);

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
				{post.map((post) => {
					return (
						<PostCards
							key={post.id}
							title={post.title}
							story={post.story}
							image_URL={post.image_URL}
						/>
					);
				})}
			</CardGrid>
			<form onSubmit={updatePosts}>
				<label>Title: </label>
				<input
					className="title-input"
					type="text"
					name="newPostTitle"
					placeholder="Title goes here"
					value={newPost.PostTitle}
					onChange={handleChanges}
				/>
				<br />
				<label>Story: </label>
				<input
					className="story-input"
					type="text"
					name="newPostStory"
					placeholder="Story text goes here"
					value={newPost.PostStory}
					onChange={handleChanges}
				/>
				<br />
				<label>Image: </label>
				<input
					className="image-input"
					type="text"
					name="newPostImage"
					placeholder="Image URL goes here"
					value={newPost.PostImage}
					onChange={handleChanges}
				/>
				<br />
				<button type="submit">Add A New Post</button>
			</form>
		</div>
	);
};

export default Home;
