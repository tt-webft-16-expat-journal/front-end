// import React, { useState } from "react";
// 	import { useDispatch, useSelector } from "react-redux";
// 	import { addPost } from "../Actions/postActions";

// 	const initialFormValues = {
// 		post_title: "Another New Post",
// 		post_content: "Some stuff here that's relevant to noone.",
// 		user_id: 1,
// 	};

const AddPost = ({ post }) => {
	// const posts = useSelector((state) => state.postReducer.posts);
	// const dispatch = useDispatch();
	// 	const [newPost, setNewPost] = useState(initialFormValues);

	// 	const createPost = (e) => {
	// 		dispatch(addPost(newPost));

	// 		const newestPost = () => {
	// 			axiosWithAuth()
	// 				.post("api/posts")
	// 				.then((res) => {
	// 					setPost(res.data);
	// 				})
	// 				.catch((err) => {
	// 					console.log("error --> ", err);
	// 				});
	// 		};
	// 		newestPost();
	// 		post.push(newPost);
	// 		// console.log(post);
	// 	};

	// const handleChange = (e) => {
	// 	setNewPost({
	// 		...newPost,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	setNewPost(initialFormValues);
	// };

	return (
		<div>
			<h3>Create</h3>
			{/* <form onSubmit={handleSubmit} className="hidden">
				<div>
					<label>
						<p>Title</p>
						<input
							name="name"
							value={newPost.post_title}
							onChange={handleChange}
						></input>
					</label>
				</div>
			</form>
			<form>
				<label>
					<p>Story</p>
				</label>
				<input
					name="name"
					value={newPost.post_content}
					onChange={handleChange}
				></input>
				<br />
				<button>Submit New Post</button>
			</form> */}
		</div>
	);
};

export default AddPost;
