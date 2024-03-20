import { Row, Col } from 'react-bootstrap';
import './Comment.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../../service/UserService.js';

/*
 * @author Đào Duy Thái
 * @date 14/02/2024
 * @des individual comment of a post
 */
const Comment = ({ comment }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUser(comment.userId)
            .then((res) => setUser(res.data))
            .catch((e) => console.error(e));
    }, []);
    return (
        <div className="Comment">
            <Row>
                <Col md="1">
                    <img
                        className="commentAvatar"
                        src="https://www.w3schools.com/w3images/avatar1.png"
                        alt="BackgroundPicture"
                    />
                </Col>
                <Col>
                    <Row>
                        <Link
                            to="/profile"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div className="commentName">{user ? user.fullName : ''}</div>
                        </Link>
                    </Row>
                    <Row>
                        <div className="commentContent">{comment.content}</div>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};
export default Comment;
