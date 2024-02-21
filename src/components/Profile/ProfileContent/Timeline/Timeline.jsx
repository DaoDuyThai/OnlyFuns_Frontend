import './Timeline.css';
import Post from '../../../Post/Post';
const Timeline = () => {
    return (
        <div className="col-md-12 timeline">
            <h2>Timeline</h2>
            <div className="posts">
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};
export default Timeline;
