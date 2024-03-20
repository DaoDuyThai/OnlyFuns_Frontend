import './PostDetail.css';
import Comment from '../../assets/img/comment.png';
import Share from '../../assets/img/share.png';
import Heart from '../../assets/img/like.png';
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

/*
 * @author Đào Duy Thái
 * @date 14/02/2024
 * @des individual post of a user
 */
const PostDetail = ({ user, post }) => {
    return (
        <div className="Post">
            <div className="postNavbar">
                <div className="postUser">
                    <img
                        className="postAvatar"
                        src="https://www.w3schools.com/w3images/avatar1.png"
                        alt="BackgroundPicture"
                    />
                    <span>
                        <b>{user ? user.fullName : ''}</b>
                    </span>
                </div>
                <Dropdown>
                    <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/">Delete</Dropdown.Item>
                        <Dropdown.Item href="/">Another action</Dropdown.Item>
                        <Dropdown.Item href="/">Report</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <Carousel>
                {post.image.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="postImage"
                            src={image}
                            alt="BackgroundPicture"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="postReact">
                <img
                    src={Heart}
                    alt=""
                    style={{ cursor: 'pointer' }}
                    // onClick={handleLike}
                />
                <Link to="/post/">
                    <img src={Comment} alt="" />
                </Link>
                <img src={Share} alt="" />
            </div>

            <span style={{ color: 'var(--gray)', fontSize: '12px' }}>
                10 likes
            </span>
            <div className="detail">
                <b>Description</b>
                <div className="post-content">
                    <p>{post.content}</p>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
