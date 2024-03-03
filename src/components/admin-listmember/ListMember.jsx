import UserCard from './UserCard.jsx';
import '../../style/admin-listmember/ListMember.css';

function ListMember() {
    return (
        <div className="list-member-content">
            <div className="list-member-header d-flex justify-content-center">
                <h3>Members</h3>
            </div>
            <div className='d-flex justify-content-center'>
                <div className="list-member">
                    <div>
                        <h4 className="fw-bold">Members</h4>
                    </div>
                    <div>
                        <p>
                            New people and Pages who join this group will appear
                            here.
                        </p>
                    </div>
                    <div className="list-member-search-bar">
                        <form className='w-100'>
                            <input type="text" placeholder="Find a member" />
                        </form>
                    </div>
                    <hr />
                    <div>
                        <UserCard />
                    </div>
                    <hr />
                    <div>
                        <h5>Admin & moderators</h5>
                    </div>
                    <div>
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListMember;
