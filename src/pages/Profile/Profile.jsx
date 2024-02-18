import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';
import Bio from '../../components/Profile/ProfileContent/Bio/Bio';
import Timeline from '../../components/Profile/ProfileContent/Timeline/Timeline';
const Profile = () => {
    return (
        <>
            <div className="container">
                <ProfileHeader />
                <div className="row">
                    <Bio />
                    <Timeline />
                </div>
            </div>
        </>
    );
};
export default Profile;
