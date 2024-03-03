import React from 'react';
import '../../style/admin-listmember/user-card.css';

const UserCard = ({user}) => {

    const defaultAvatarUrl = "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg";

    return (
        <div>
            <div className="user-card mx-4 my-2">
                <div className="d-flex">
                    <img
                        className="me-2"
                        src={user.profilePictureUrl || defaultAvatarUrl}
                        alt="avatar"
                    />
                    <div className="user-info me-2">
                        <div className="user-name">
                            <a style={{fontSize:'17px'}} href="#"><strong>{user.userId.username}</strong></a>
                        </div>
                         <div className="user-address">
                            {(user.address.city) ? (
                                <p>Sống tại {user.address.city}</p>
                            ) : (
                                <p></p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="act-btn">
                    <button className="btn btn-outline-info btn-action">
                        Add friend
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;