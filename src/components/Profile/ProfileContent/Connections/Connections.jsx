import Follower from './Follower/Follower';
import './Connections.css';
const ConnectionsBoard = () => {
    return (
        <div className="col-md-12 connectionsBoard">
            <div className="content">
                <h2
                    onClick={() => {
                        console.log('clicked');
                    }}
                >
                    Connections
                </h2>
                <div className="list">
                    <Follower />
                    <Follower />
                    <Follower />
                    <Follower />
                    <Follower />
                </div>
            </div>
        </div>
    );
};
export default ConnectionsBoard;
