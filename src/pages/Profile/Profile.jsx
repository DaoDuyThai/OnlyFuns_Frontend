import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';
import Bio from '../../components/Profile/ProfileContent/Bio/Bio';
import Timeline from '../../components/Profile/ProfileContent/Timeline/Timeline';
import Connections from '../../components/Profile/ProfileContent/Connections/Connections';
import './Profile.css';
const Profile = () => {
    return (
        <>
            <div className="container">
                <ProfileHeader />
                <div className="row">
                    <div className='col-md-5'>
                        <Bio />
                        <Connections />
                    </div>
                    <div className='col-md-7'>
                        <Timeline />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Profile;
