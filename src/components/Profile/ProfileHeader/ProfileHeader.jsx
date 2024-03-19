import './ProfileHeader.css';
import ActionBar from './ActionBar/ActionBar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfileHeader = ({ profile }) => {
    const navigate = useNavigate();
    const userId = localStorage.getItem('UserId');
    const accessChat = async () => {
        try {
            const res = await axios.post('http://localhost:9999/chat/create', {
                participants: [profile.userId, userId], // Switched the order if needed
            });

            if (res.status === 200 || res.status === 201) {
                navigate('/chat');
            }
        } catch (error) {
            console.error('Error accessing chat:', error);
        }
    };
    console.log(profile.userId === userId);
    console.log(typeof profile.userId, typeof userId)
    console.log(profile.userId, userId)
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
                    <div className="profileName">{profile.fullName}</div>
                    <div>
                        {userId !== profile.userId && (
                            <button
                                className="btn btn-primary me-1"
                                onClick={accessChat}
                            >
                                Chat
                            </button>
                        )}
                        <Link to={'edit'} className="btn btn-primary">
                            Edit Profile
                        </Link>
                    </div>
                </div>
                <ActionBar profile={profile} />
            </div>
        </>
    );
};

export default ProfileHeader;
