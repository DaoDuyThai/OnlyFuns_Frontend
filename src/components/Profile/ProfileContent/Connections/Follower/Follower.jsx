import './Follower.css';
const Follower = () => {
    return (
        <>
            <div className="follower">
                <div className="userInfo flex-grow-1">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="profile"
                        className="avatar"
                    />
                    <span>Username</span>
                </div>
                <button className="btn btn-primary btn-sm">Follow</button>
            </div>
        </>
    );
};
export default Follower;
