import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';
import FollowerCard from '../../components/Profile/ProfileContent/Connections/FollowerCard/FollowerCard';
import Header from '../../components/Header/Header';
import './Connections.css';
const Connections = () => {
    return (
        <>
            <Header />
            <div className="container">
                <ProfileHeader />
                <div className="row connections">
                    <div className="col-md-12">
                        <section className="connectionsList m-2">
                            <h2>Connections</h2>
                            <div className="row followersSec pt-2">
                                <span>
                                    <h3>Followers</h3>
                                </span>
                                <FollowerCard />
                                <FollowerCard />
                                <FollowerCard />
                                <FollowerCard />
                            </div>
                            <div className="row followingSec pt-5">
                                <span>
                                    <h3>Following</h3>
                                </span>
                                <FollowerCard />
                                <FollowerCard />
                                <FollowerCard />
                                <FollowerCard />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Connections;
