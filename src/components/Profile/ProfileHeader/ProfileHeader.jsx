import './ProfileHeader.css';
import ActionBar from './ActionBar/ActionBar';
const ProfileHeader = () => {
    return (
        <>
            <div className="row profileHeader">
                <div className="col-9 images">
                    <div className="backgroundImage">
                        <img
                            src="https://www.w3schools.com/w3images/mountains.jpg"
                            alt="background"
                        />
                    </div>
                    <div className="avatar">
                        <img
                            src="https://www.w3schools.com/w3images/avatar2.png"
                            alt="profile"
                        />
                    </div>
                </div>
                <div className="col-9 profileUtils">
                    <div className="profileName">
                        <h1>John Doe</h1>
                    </div>
                    <button className="col-3 editProfile btn btn-primary">
                        Edit Profile
                    </button>
                </div>
                <ActionBar />
            </div>
        </>
    );
};
export default ProfileHeader;
