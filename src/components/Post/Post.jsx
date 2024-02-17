// import React, { useState } from "react";
import "./Post.css";
import Comment from "../../assets/img/comment.png";
import Share from "../../assets/img/share.png";
import Heart from "../../assets/img/like.png";
import Carousel from 'react-bootstrap/Carousel';
// import { UilEllipsisV } from "@iconscout/react-unicons";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
// import NotLike from "../../assets/img/notlike.png";
// import { likePost } from "../../api/PostsRequests";
// import { useSelector } from "react-redux";

// const Post = ({ data }) => {

/*
* @author Đào Duy Thái
* @date 14/02/2024
* @des individual post of a user
*/
const Post = () => {
    //   const { user } = useSelector((state) => state.authReducer.authData);
    //   const [liked, setLiked] = useState(data.likes.includes(user._id));
    //   const [likes, setLikes] = useState(data.likes.length)


    //   const handleLike = () => {
    //     likePost(data._id, user._id);
    //     setLiked((prev) => !prev);
    //     liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
    //   };
    return (
        <div className="Post">
            <div className="postNavbar">
                <div className="postUser">
                    <img
                        className="postAvatar"
                        src="https://www.w3schools.com/w3images/avatar1.png" alt="BackgroundPicture"
                    />
                    <span>
                        <b>UserName </b>
                        {/* <b>{data.name} </b> */}
                    </span>
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">

                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/">Delete</Dropdown.Item>
                        <Dropdown.Item href="/">Another action</Dropdown.Item>
                        <Dropdown.Item href="/">Report</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="postImage"
                        src="https://www.w3schools.com/w3images/avatar1.png" alt="BackgroundPicture"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="postImage"
                        src="https://www.w3schools.com/w3images/avatar2.png" alt="BackgroundPicture"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="postImage"
                        src="https://www.w3schools.com/w3images/avatar3.png" alt="BackgroundPicture"
                    />
                </Carousel.Item>
            </Carousel>




            <div className="postReact">
                <img
                    src={Heart}
                    // src={liked ? Heart : NotLike}
                    alt=""
                    style={{ cursor: "pointer" }}
                // onClick={handleLike}
                />
                <Link to="/post/">
                    <img src={Comment} alt="" />
                </Link>
                <img src={Share} alt="" />
            </div>

            <span style={{ color: "var(--gray)", fontSize: "12px" }}>
                10 likes
            </span>
            <div className="detail">

                <b>Description</b>
                {/* <span>{data.desc}</span> */}
            </div>
        </div>
    );
};

export default Post;
