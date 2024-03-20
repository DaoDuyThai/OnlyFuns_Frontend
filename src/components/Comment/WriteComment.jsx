import './Comment.css';
import { useState } from 'react';
import { createPostComment } from '../../service/PostService.js';

/*
 * @author Đào Duy Thái
 * @date 14/02/2024
 * @des input box to write a comment
 */
const WriteComment = ({ postId, triggerRender }) => {
    const userId = localStorage.getItem('UserId');
    const [content, setContent] = useState('');
    const commentBody = {
        userId,
        postId,
        content,
    };

    async function handleSubmitComment() {
        const response = await createPostComment('/post/comment', commentBody);
        if (response.status === 'success') {
            setContent('');
            triggerRender();
        } else if (response.status === 500) {
            console.log(response.message);
        }
    }

    return (
        <div className="WriteComment">
            <img
                src="https://www.w3schools.com/w3images/avatar1.png"
                className=""
                alt="BackgroundPicture"
            />
            <div>
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What's happening?"
                />
            </div>
            <button onClick={handleSubmitComment} className="btn btn-primary">
                Send
            </button>
        </div>
    );
};

export default WriteComment;
