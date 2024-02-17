import Comment from "../Comment/Comment";
import WriteComment from "../Comment/WriteComment";

const Comments = () => {
    return (
        <div className="Comments">
            <div className="comment">
                <Comment />
            </div>
            <div className="comment">
                <Comment />
            </div>
            <div className="comment">
                <Comment />
            </div>
            <div className="comment">
                <Comment />
            </div>
            <div className="writeComment">
                <WriteComment />
            </div>
        </div>
    )
}
export default Comments;