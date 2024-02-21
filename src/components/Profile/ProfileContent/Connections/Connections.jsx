import Follower from './Follower/Follower';
import './Connections.css';
const ConnectionsBoard = () => {
    return (
        <div className="col-md-12 connectionsBoard">
            <div className="ConnectionContent">
                <h2
                    onClick={() => {
                        console.log('clicked');
                    }}
                >
                    Connections
                </h2>
                <div className="ConnectionList">
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
