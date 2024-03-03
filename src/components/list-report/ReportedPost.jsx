import UserCard from './UserCard.jsx';
import '../../style/list-report/ReportedPost.css';
import { useEffect, useState } from 'react';
import { getUser } from '../../service/UserService.js';

function ReportedPost({ post }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser(post.userId)
            .then((res) => setUser(res.data))
            .then((e) => console.error(e));
    }, []);

    return (
        <div className="reported-post mt-3">
            <div className="reporter">
                <p className="m-3">
                    <a>
                        <strong>Phuoc</strong>
                    </a>{' '}
                    report this{' '}
                    <a>
                        <strong>post</strong>
                    </a>
                </p>
                <hr />

                <div className="m-3">
                    {user ? (
                        <UserCard user={user} time={post.createdAt} />
                    ) : (
                        <></>
                    )}
                </div>
                <div className="post-content m-3">
                    <p>{post.content}</p>
                </div>
                <div className="post-image my-2">
                    <img src={post.image} alt="post-image" />
                </div>
                <div className="action m-3">
                    <button className="keep-btn mx-2">Keep</button>
                    <button className="rmv-btn mx-2">Remove</button>
                </div>
            </div>
        </div>
    );
}

export default ReportedPost;
