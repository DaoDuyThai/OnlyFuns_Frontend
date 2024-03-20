import Comment from "../Comment/Comment";

/*
* @author Đào Duy Thái
* @date 14/02/2024
* @des comments of a post are shown here
*/
const Comments = ({ comments }) => {
    return (
        <div className="Comments">
            {comments.map((comment,index) => (
                <div className="comment" key={index}>
                    <Comment comment={comment}/>
                </div>
            ))}
        </div>
    );
};
export default Comments;