import React from "react";
import EditPosts from "./EditPosts";
import AddPost from "./AddPost";
const Dashboard = ({ post, setPost }) => {
	return (
		<div>
			<h2>Your Dashboard</h2>
			<AddPost post={post} />
			<EditPosts post={post} setPost={setPost} />
		</div>
	);
};

export default Dashboard;
