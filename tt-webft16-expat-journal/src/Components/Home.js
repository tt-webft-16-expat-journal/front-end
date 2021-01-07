import React, { useState } from "react";
import PostCards from "./postCards";
import UpdatePosts from "./updatePosts";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
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
		id: uuidv4,
		title: "Post Title 1",
		story: "Story text goes here.",
		image_URL: img,
	},
];

const Home = () => {
	const posts = useSelector((state) => state.postReducer.posts);
	const dispatch = useDispatch();
	const [readPost, setReadPost] = useState(initialState);
	const [post, setPost] = useState(initialState);
	const [newPost, setNewPost] = useState(initialState);

	const createPost = (e) => {
		dispatch(addPost(newPost));

		const newestPost = () => {
			axiosWithAuth()
				.get("api/posts")
				.then((res) => {
					setPost(res.data);
				})
				.catch((err) => {
					console.log("error --> ", err);
				});
		};
		newestPost();
		post.push(posts);
		console.log(post);
	};

	const getPost = () => {
		axiosWithAuth()
			.get("api/posts")
			.then((res) => {
				setReadPost(res.data);
			})
			.catch((err) => {
				console.log("error --> ", err);
			});
	};

	const handleChanges = (e) => {
		setNewPost({
			...newPost,
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
			<div>
				<h2>See what others have posted...</h2>
				{readPost.map((item) => {
					return (
						<div key={uuidv4()}>
							<PostCards
								key={item.id}
								title={item.title}
								story={item.story}
								image_URL={item.image_URL}
							/>
						</div>
					);
				})}
			</div>
			<CardGrid>
				{post.map((item) => {
					return (
						<div key={uuidv4()}>
							<PostCards
								key={uuidv4()}
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
				<h2>Add a New Post</h2>
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
					<button
						type="submit"
						onClick={() => {
							createPost();
						}}
					>
						Submit!
					</button>
				</form>
			</div>
		</div>
	);
};

export default Home;
