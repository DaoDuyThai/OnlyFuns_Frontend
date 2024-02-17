import { Row, Col } from 'react-bootstrap'
import './Comment.css'
import { Link } from 'react-router-dom'
const Comment = () => {
    return (
        <div className="Comment">
            <Row>
                <Col md="1">
                    <img
                        className="commentAvatar"
                        src="https://www.w3schools.com/w3images/avatar1.png" alt="BackgroundPicture"
                    />
                </Col>
                <Col>
                    <Row>
                        <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
                            <div className="commentName">
                                @UserName
                            </div>
                        </Link>

                    </Row>
                    <Row>
                        <div className="commentContent">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dicta omnis velit perferendis, debitis quibusdam optio ab amet ut doloremque. Dignissimos, aliquid? Distinctio sapiente beatae unde repellendus placeat ex in.
                        </div>
                    </Row>
                </Col>


            </Row>
        </div>
    )
}
export default Comment