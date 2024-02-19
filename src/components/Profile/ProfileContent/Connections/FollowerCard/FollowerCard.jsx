import './FollowerCard.css';
const FollowerCard = () => {
    return (
        <div className="col-md-4">
            <div className="followerCard">
                <div className="followerCardAvatar">
                    <img src="https://via.placeholder.com/150" alt="avatar" />
                </div>
                <div className="followerCardInfo">
                    <span className="followerCardInfoName">John Doe</span>
                    <span className="followerCardInfoUsername">@johndoe</span>
                </div>
                <div className="followerCardAction">
                    <button className="btn btn-primary">Follow</button>
                </div>
            </div>
        </div>
    );
};
export default FollowerCard;
