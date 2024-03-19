import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';
import Bio from '../../components/Profile/ProfileContent/Bio/Bio';
import Timeline from '../../components/Profile/ProfileContent/Timeline/Timeline';
import Connections from '../../components/Profile/ProfileContent/Connections/Connections';
import Header from '../../components/Header/Header';
import './Profile.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProfile } from '../../service/UserService';

const Profile = () => {
    const { userId } = useParams();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        getProfile(userId)
            .then((res) => setProfile(res))
            .catch((error) => console.error('Error fetching profile:', error));
    }, [userId]);

    return (
        <>
            <Header profile={profile} /> {/* Pass user to Header component */}
            <div className="container">
                {/* Render profile content when user is available */}
                {profile && (
                    <div className="row">
                        <ProfileHeader profile={profile} />
                        <div className="col-md-5">
                            <Bio profile={profile} />
                            <Connections />
                        </div>
                        <div className="col-md-7">
                            <Timeline />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Profile;
