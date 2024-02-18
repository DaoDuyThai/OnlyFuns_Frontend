import Comment from "../Comment/Comment";
import WriteComment from "../Comment/WriteComment";

/*
* @author Đào Duy Thái
* @date 14/02/2024
* @des comments of a post are shown here
*/
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