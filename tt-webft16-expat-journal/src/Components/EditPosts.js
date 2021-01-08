import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { axiosWithAuth } from "../Utils/axiosWithAuth";
import styled from "styled-components";

//Styles
const DeletleButton = styled.span`
	text-align: center;
`;

const DeleteWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const EditForm = styled.span`
	justify-content: center;
	align-item: center;
	margin: 1% 4%;
	padding: 1%;
`;

const EditContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const LiEditor = styled.li`
	display: flex;
	flex-direction: column;
	margin: 2%;
	list-style: none;
`;

//Misc computation tasks

const initialState = {
	PostTitle: "",
	PostStory: "",
	PostImage: "",
	id: 0,
	editing: false,
};

//Start of Component Functionality

const EditPosts = ({ post, setPost }) => {
	const [editing, setEditing] = useState(false);
	const [editPost, setPostEdit] = useState(initialState);
	const id = `${editPost.id}`;

	const editPosts = (postedItem) => {
		setEditing(true);
		setPostEdit(postedItem);
	};

	const saveEdits = (event) => {
		event.preventDefault();
		axiosWithAuth()
			.put(`api/posts/:${id}`, editPost)
			.then((res) => {
				setPost(
					post.map((item) => (item.id === res.data.id ? res.data : item))
				);
			})
			.catch((err) => console.log(err));
	};

	const deletePost = (deletedPost) => {
		axiosWithAuth()
			.delete(`api/posts/:${id}`)
			.then((res) => {
				console.log();
				updatePost(
					post.filter((deletedPost) => {
						return post.id !== res.data;
					})
				);
				window.location = "/home";
			})
			.catch((err) => {
				console.log("ERROR: ", err);
			});
	};

	return (
		<div>
			<div>
				<button onClick={() => editPosts(post)}>Edit</button>
			</div>

			<EditContainer>
				<h2>Edit Your Posts</h2>
				<EditForm>
					{editing && (
						<form onSubmit={saveEdits}>
							<label>Title: </label>
							<input
								onChange={(e) =>
									setPostEdit({ ...editPost, title: e.target.value })
								}
								className="title-input"
								type="text"
								name="newPostTitle"
								placeholder="Title goes here"
								value={editPost.title}
							/>
							<br />
							<label>Story: </label>
							<input
								className="story-input"
								type="text"
								name="newPostStory"
								placeholder="Story text goes here"
								value={editPost.story}
								onChange={(e) =>
									setPostEdit({ ...editPost, story: e.target.value })
								}
							/>
							<br />
							<label>Image: </label>
							<input
								className="image-input"
								type="text"
								name="newPostImage"
								placeholder="Image URL goes here"
								value={editPost.PostImage}
								onChange={(e) =>
									setPostEdit({ ...editPost, image_URL: e.target.value })
								}
							/>
							<br />
							<button type="button" onClick={() => setEditing(false)}>
								Finish Edits
							</button>
						</form>
					)}
				</EditForm>
				<DeleteWrapper>
					{/* Delete capability follows  */}
					{post.map((postedItem) => {
						return (
							<LiEditor key={uuidv4()} onClick={() => editPosts(postedItem)}>
								<h3>{postedItem.title}</h3>
								<DeletleButton
									className="delete"
									onClick={(e) => {
										e.stopPropagation();
										deletePost(postedItem);
									}}
								>
									Delete Post
								</DeletleButton>
							</LiEditor>
						);
					})}
				</DeleteWrapper>
			</EditContainer>
		</div>
	);
};

export default EditPosts;
