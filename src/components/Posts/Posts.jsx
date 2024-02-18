// import React, { useEffect } from "react";
// import { getTimelinePosts } from "../../actions/PostsAction";
import Post from "../Post/Post";
// import { useSelector, useDispatch } from "react-redux";
import "./Posts.css";
// import { useParams } from "react-router-dom";

/*
* @author Đào Duy Thái
* @date 14/02/2024
* @des users post are shown here
*/
const Posts = () => {
    return (
        <div className="Posts">
            <div className="singlePost">
                <Post />
            </div>
            <div className="singlePost">
                <Post />
            </div>
            <div className="singlePost">
                <Post />
            </div>
            <div className="singlePost">
                <Post />
            </div>
            <div className="singlePost">
                <Post />
            </div>
            {/* {loading
                ? "Fetching posts...."
                : posts.map((post, id) => {
                    return <Post data={post} key={id} />;
                })} */}
        </div>
    )
}
export default Posts