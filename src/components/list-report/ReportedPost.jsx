import UserCard from './UserCard.jsx';
import "../../style/list-report/ReportedPost.css"
function ReportedPost() {
    return (
        <div className="reported-post container mt-3">
            <div className="reporter">
                <p><a><strong>Phuoc</strong></a> report this <a><strong>post</strong></a></p>
                <hr />
                <UserCard />
                <div className="post-content">
                    <h5>Hi there</h5>
                </div>
                <hr />

                <div className="action">
                    <button className="keep-btn mx-2">Keep</button>
                    <button className="rmv-btn mx-2">Remove</button>
                </div>
            </div>
        </div>);
}

export default ReportedPost;