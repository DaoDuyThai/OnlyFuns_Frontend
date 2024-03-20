import Post from '../Post/Post';
import './Posts.css';
import { useEffect, useState } from 'react';
import { getPosts } from '../../service/PostService.js';

/*
 * @author Đào Duy Thái
 * @date 14/02/2024
 * @des users post are shown here
 */
const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts('/post')
            .then((res) => setPosts(res.data))
            .catch((e) => console.error(e));
    }, []);
    return (
        <div className="Posts">
            {posts.length > 0 &&
                posts.map((post) => (
                    <div className="singlePost" key={post._id}>
                        <Post post={post} />
                    </div>
                ))}
        </div>
    );
};
export default Posts;
