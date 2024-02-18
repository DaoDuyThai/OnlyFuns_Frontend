import Posts from '../Posts/Posts';
import PostShare from '../PostShare/PostShare';
import './PostSide.css';

/*
* @author Đào Duy Thái
* @date 14/02/2024
* @des middle side(where you can share post or view post) of the home page
*/
const PostSide = () => {

    return (
        <div className='PostSide'>
            <PostShare />

            <Posts />
        </div>
    )
}
export default PostSide