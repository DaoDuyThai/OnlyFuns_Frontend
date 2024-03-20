import Comments from '../../components/Comments/Comments';
import Header from '../../components/Header/Header';
import './Post.css';
import PostDetail from '../../components/PostDetail/PostDetail.jsx';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostByID } from '../../service/PostService.js';
import { getUser } from '../../service/UserService.js';
import WriteComment from '../../components/Comment/WriteComment.jsx';

const Post = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [post, setPost] = useState(null);

    function fetchData() {
        getPostByID(id)
            .then((res) => {
                setPost(res.data);
                return getUser(res.data.userId);
            })
            .then((res) => setUser(res.data))
            .catch((e) => console.error(e));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Header />
            {post && user ? (
                <div className="PostPage">
                    <PostDetail user={user} post={post} />
                    <Comments comments={post.comments} />
                    <WriteComment postId={post._id} triggerRender={()=>fetchData()} />
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default Post;
