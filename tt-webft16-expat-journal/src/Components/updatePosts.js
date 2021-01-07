import React, { useState } from "react";
import { axiosWithAuth } from "../Utils/axiosWithAuth";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

//Styles
const EditContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-item: center;
	border: 2px black solid;
	margin: 1% 4%;
	padding: 4%;
`;

const EditForm = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const initialState = {
	PostTitle: "",
	PostStory: "",
	PostImage: "",
	id: 0,
	editing: false,
};

const UpdatePosts = ({ post, updatePost }) => {
	const [editing, setEditing] = useState(false);
	const [editPost, setPostEdit] = useState(initialState);
	const id = `${editPost.id}`;

	const editPosts = (post) => {
		setEditing(true);
		setPostEdit(post);
	};

	const saveEdits = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.put(`api/posts/:${id}`, editPost)
			.then((res) => {
				updatePost(
					post.map((item) => (item.id === res.data.id ? res.data : item))
				);
			})
			.catch((err) => console.log(err));
	};

	const deletePost = (post) => {
		axiosWithAuth()
			.delete(`api/posts/:${id}`)
			.then((res) => {
				updatePost(
					post.filter((post) => {
						return post.id !== res.data;
					})
				);
			});
	};

	return (
		<div>
			{post.map((item) => {
				return (
					<div key={uuidv4()}>
						<button onClick={() => editPosts(item)}>Edit</button>
						<button onClick={() => deletePost(item)}>Delete</button>
					</div>
				);
			})}

			<EditContainer>
				<h2>Edit This Post</h2>
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
							<button onClick={() => setEditing(false)}>Submit!</button>
						</form>
					)}
				</EditForm>
			</EditContainer>
		</div>
	);
};

export default UpdatePosts;
