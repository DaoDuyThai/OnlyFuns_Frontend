// import React, { useEffect } from "react";
// import { getTimelinePosts } from "../../actions/PostsAction";
import Post from "../Post/Post";
// import { useSelector, useDispatch } from "react-redux";
import "./Posts.css";
// import { useParams } from "react-router-dom";
const Posts = () => {
    return (
        <div className="Posts">
            <Post />
            <Post />
            {/* {loading
                ? "Fetching posts...."
                : posts.map((post, id) => {
                    return <Post data={post} key={id} />;
                })} */}
        </div>
    )
}
export default Posts